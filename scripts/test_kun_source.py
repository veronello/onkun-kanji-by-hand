#!/usr/bin/env python3
"""Read-only reconciliation against the supplied workbook; no spreadsheet dependencies.

Usage: python scripts/test_kun_source.py /path/to/OnKun_Translations_1-204_2026-10-17.xlsx
"""
import hashlib
import json
import re
import sys
import zipfile
from collections import Counter
from pathlib import Path
from xml.etree import ElementTree as ET

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
    assert digest == selection['sourceSha256'], 'Different source workbook'
    first, last = selection['cardRange']
    rows = [row for row in read_examples(source) if first <= int(row['B']) <= last]
    assert len(rows) == 913
    assert Counter(row['G'] for row in rows) == {'ON': 545, 'KUN': 368}
    assert len({row['A'] for row in rows}) == len(rows)

    manifest = json.loads((ROOT / 'data/excel/manifest.json').read_text())
    cards = [card for chunk in manifest['chunks'] for card in
             json.loads((ROOT / 'data/excel' / chunk).read_text())]
    shared = {word[6]['id']: (card, word) for card in cards for word in card['words']}
    for row in rows:
        card, word = shared[row['A']]
        assert card['id'] == int(row['B']) and card['kanji'] == row['C'], row['A']
        assert word[:4] == [row[col] for col in ['E', 'H', 'I', 'J']], row['A']
        assert word[6]['type'] == row['G'] and word[6]['group'] == row['F'], row['A']

    included = selection['exampleIds']
    excluded = selection['excluded']
    excluded_ids = {entry['id'] for entry in excluded}
    assert len(included) == len(set(included)) == 341
    assert len(excluded) == len(excluded_ids) == 27
    assert not set(included) & excluded_ids
    assert set(included) | excluded_ids == {row['A'] for row in rows if row['G'] == 'KUN'}
    assert len({tuple(shared[id][1][:2]) for id in included}) == len(included)
    assert Counter(entry['category'] for entry in excluded) == {
        'mixed': 24, 'template': 1, 'context-review': 1, 'duplicate': 1}
    for entry in excluded:
        assert entry['reason']
        if entry['category'] == 'duplicate':
            assert entry['duplicateOf'] in included
            assert shared[entry['id']][1][:4] == shared[entry['duplicateOf']][1][:4]
    for id in included:
        word = shared[id][1]
        assert word[6]['eligible'] and word[6]['type'] == 'KUN'
        assert all(isinstance(value, str) and value.strip() for value in word[:4])
        assert not re.search(r'[○…]', word[0])
        assert not any(re.search(r'[一-龯]', meaning) for meaning in word[2:4]), id
    for variants in [('EX-00399', 'EX-00008'), ('EX-00837', 'EX-00840'),
                     ('EX-00445', 'EX-00449'), ('EX-00527', 'EX-00529'),
                     ('EX-00551', 'EX-00553', 'EX-00555'), ('EX-00839', 'EX-00841')]:
        assert all(id in included for id in variants), variants
    assert hashlib.sha256(source.read_bytes()).hexdigest() == digest, 'Workbook changed'
    print('PASS: 913 ID joins; Japanese/romaji/RU/EN unchanged; 368 KUN decisions; '
          '341 tasks; 27 documented exclusions; source SHA-256 unchanged.')


if __name__ == '__main__':
    main(Path(sys.argv[1]))
