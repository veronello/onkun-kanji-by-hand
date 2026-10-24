#!/usr/bin/env python3
"""Read-only reconciliation against the supplied workbook; no spreadsheet dependencies.

Usage: python scripts/test_kun_source.py /path/to/OnKun_Translations_1-300_2026-10-23.xlsx
"""
import hashlib
import json
import re
import sys
import zipfile
from collections import Counter
from pathlib import Path
from xml.etree import ElementTree as ET
from import_drill_visibility import build_visibility

ROOT = Path(__file__).resolve().parents[1]
NS = {'s': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}


def read_examples(source):
    with zipfile.ZipFile(source) as archive:
        strings = []
        if 'xl/sharedStrings.xml' in archive.namelist():
            strings = [''.join(node.itertext()) for node in
                       ET.fromstring(archive.read('xl/sharedStrings.xml')).findall('s:si', NS)]
        workbook = ET.fromstring(archive.read('xl/workbook.xml'))
        rels = ET.fromstring(archive.read('xl/_rels/workbook.xml.rels'))
        targets = {node.get('Id'): node.get('Target') for node in rels}
        sheet = next(node for node in workbook.find('s:sheets', NS)
                     if node.get('name') == 'OnKun Examples')
        target = targets[sheet.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id')]
        path = target.lstrip('/') if target.startswith('/') else 'xl/' + target
        result = []
        for row in ET.fromstring(archive.read(path)).findall('s:sheetData/s:row', NS):
            cells = {}
            for cell in row:
                col = re.match(r'[A-Z]+', cell.get('r')).group()
                value = cell.find('s:v', NS)
                value = value.text if value is not None else ''
                if cell.get('t') == 's':
                    value = strings[int(value)]
                elif cell.get('t') == 'inlineStr':
                    value = ''.join(cell.find('s:is', NS).itertext())
                cells[col] = value
            result.append(cells)
        return result[1:]


def main(source):
    digest = hashlib.sha256(source.read_bytes()).hexdigest()
    selection = json.loads((ROOT / 'data/kun-drill-selection.json').read_text())
    visibility = json.loads((ROOT / 'data/drill-visibility.json').read_text())
    assert digest in {selection['sourceSha256'], visibility['sourceSha256']}, 'Different source workbook'
    if digest == visibility['sourceSha256']:
        flags = build_visibility(source)
        flags['sourceWorkbook'] = visibility['sourceWorkbook']
        assert flags == visibility, 'Flags do not match workbook'
    first, last = selection['cardRange']
    rows = [row for row in read_examples(source) if first <= int(row['B']) <= last]
    assert len(rows) == 1299
    assert Counter(row['G'] for row in rows) == {'ON': 790, 'KUN': 509}
    translated = [row for row in rows if row.get('I') and row.get('J')]
    assert len(translated) == 1297
    translated_ids = {row['A'] for row in translated}
    assert {row['A'] for row in rows if not row.get('I') or not row.get('J')} == {'EX-00998', 'EX-01019'}
    assert len({row['A'] for row in rows}) == len(rows)

    manifest = json.loads((ROOT / 'data/excel/manifest.json').read_text())
    cards = [card for chunk in manifest['chunks'] for card in
             json.loads((ROOT / 'data/excel' / chunk).read_text())]
    shared = {word[6]['id']: (card, word) for card in cards for word in card['words']}
    translations = json.loads((ROOT / 'data/translations-12.json').read_text())
    # Later card batches may add translations beyond this drill's source range.
    source_ids = {row['A'] for row in rows}
    assert translated_ids == set(translations) & source_ids
    for row in rows:
        card, word = shared[row['A']]
        assert card['id'] == int(row['B']) and card['kanji'] == row['C'], row['A']
        assert word[:4] == [row.get(col, '') for col in ['E', 'H', 'I', 'J']], row['A']
        assert word[6]['type'] == row['G'] and word[6]['group'] == row['F'], row['A']
        if row['A'] in translated_ids:
            overlay = translations[row['A']]
            assert [overlay[key] for key in ['jp', 'romaji', 'ru', 'en']] == word[:4], row['A']

    included = selection['exampleIds']
    excluded = selection['excluded']
    excluded_ids = {entry['id'] for entry in excluded}
    assert len(included) == len(set(included)) == 470
    assert len(excluded) == len(excluded_ids) == 39
    assert not set(included) & excluded_ids
    assert set(included) | excluded_ids == {row['A'] for row in rows if row['G'] == 'KUN'}
    assert len({tuple(shared[id][1][:2]) for id in included}) == len(included)
    assert Counter(entry['category'] for entry in excluded) == {
        'mixed': 30, 'template': 3, 'context-review': 1, 'duplicate': 5}
    for entry in excluded:
        assert entry['reason']
        if entry['category'] == 'duplicate':
            assert entry['duplicateOf'] in included
            # Gloss wording can differ between source cards; do not repeat the same written task.
            assert shared[entry['id']][1][:2] == shared[entry['duplicateOf']][1][:2]
    for id in included:
        word = shared[id][1]
        assert word[6]['eligible'] and word[6]['type'] == 'KUN'
        assert all(isinstance(value, str) and value.strip() for value in word[:4])
        assert not re.search(r'[○…]', word[0])
        assert not any(re.search(r'[一-龯]', meaning) for meaning in word[2:4]), id
    for variants in [('EX-00399', 'EX-00008'), ('EX-00837', 'EX-00840'),
                     ('EX-00445', 'EX-00449'), ('EX-00527', 'EX-00529'),
                     ('EX-00551', 'EX-00553', 'EX-00555'), ('EX-00839', 'EX-00841'),
                     ('EX-00932', 'EX-00935'), ('EX-01167', 'EX-01169')]:
        assert all(id in included for id in variants), variants
    for id in ['EX-00922', 'EX-00924', 'EX-00928', 'EX-01106', 'EX-01232', 'EX-01249', 'EX-01282']:
        assert id in included, f'Confirmed single-kanji/KUN entry missing: {id}'
    assert sum(shared[id][0]['id'] > 204 for id in included) == 129
    previous = {
        'exampleIds': [id for id in included if shared[id][0]['id'] <= 204],
        'excluded': [entry for entry in excluded if shared[entry['id']][0]['id'] <= 204],
    }
    normalized = json.dumps(previous, sort_keys=True, ensure_ascii=False, separators=(',', ':')).encode()
    assert hashlib.sha256(normalized).hexdigest() == '49f730a35f7bf6385fdd6ef96e546856b0a7568d1955199776e3a24e566e686b', \
        'Previous 341 task IDs/order and 27 exclusion decisions must remain unchanged'
    hidden = visibility['hiddenExampleIds']
    assert len(hidden) == len(set(hidden)) == 20
    assert all(id in shared for id in hidden)
    assert Counter(shared[id][1][6]['type'] for id in hidden) == {'KUN': 19, 'ON': 1}
    assert [id for id in hidden if shared[id][1][6]['type'] == 'ON'] == ['EX-00164']
    hidden_kun = set(hidden) & set(included)
    visible = [id for id in included if id not in hidden_kun]
    assert len(hidden_kun) == 19 and len(visible) == 451
    assert hashlib.sha256(source.read_bytes()).hexdigest() == digest, 'Workbook changed'
    print('PASS: 1299 ID joins; 1297 translated examples; Japanese/romaji/RU/EN unchanged; '
          '509 KUN decisions; 470 approved / 451 visible / 19 hidden; '
          '39 documented exclusions; source SHA-256 unchanged.')


if __name__ == '__main__':
    main(Path(sys.argv[1]))
