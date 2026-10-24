#!/usr/bin/env python3
"""Read-only ON selection reconciliation. Pass the supplied workbook path as argument."""
import hashlib
import json
import re
import sys
from collections import Counter
from pathlib import Path

from test_kun_source import ROOT, read_examples
from import_drill_visibility import build_visibility


def main(source):
    digest = hashlib.sha256(source.read_bytes()).hexdigest()
    selection = json.loads((ROOT / 'data/on-drill-selection.json').read_text())
    assert selection['sourceSha256'] == digest
    visibility = json.loads((ROOT / 'data/drill-visibility.json').read_text())
    flags = build_visibility(source)  # Header-based join also checks the shifted hide sheet.
    flags['sourceWorkbook'] = visibility['sourceWorkbook']
    assert flags == visibility
    rows = [r for r in read_examples(source) if 1 <= int(r['B']) <= 300]
    assert len(rows) == len({r['A'] for r in rows}) == 1299
    assert Counter(r['G'] for r in rows) == {'ON':790, 'KUN':509}
    assert sum(bool(r.get('I')) and bool(r.get('J')) for r in rows) == 1297
    manifest = json.loads((ROOT / 'data/excel/manifest.json').read_text())
    cards = [c for p in manifest['chunks'] for c in
             json.loads((ROOT / 'data/excel' / p).read_text())]
    by_id = {w[6]['id']:(c,w) for c in cards for w in c['words']}
    for r in rows:
        c,w = by_id[r['A']]
        assert c['id'] == int(r['B']) and c['kanji'] == r['C'], r['A']
        assert w[:4] == [r.get(k,'') for k in ['E','H','I','J']], r['A']
        assert w[6]['group'] == r['F'] and w[6]['type'] == r['G'], r['A']

    included, excluded = selection['exampleIds'], selection['excluded']
    excluded_ids = {e['id'] for e in excluded}
    assert len(included) == len(set(included)) == 770
    assert len(excluded) == len(excluded_ids) == 20
    assert not set(included) & excluded_ids
    assert set(included) | excluded_ids == {r['A'] for r in rows if r['G']=='ON'}
    assert Counter(e['category'] for e in excluded) == {
        'mixed':8, 'duplicate':9, 'loan-hybrid-review':1, 'single-kanji-review':2}
    assert included == [r['A'] for r in rows if r['G']=='ON' and r['A'] not in excluded_ids]
    assert [min(by_id[id][0]['id'] for id in included),
            max(by_id[id][0]['id'] for id in included)] == selection['cardRange']
    assert len({tuple(by_id[id][1][:2]) for id in included}) == len(included)
    for id in included:
        c,w = by_id[id]
        assert w[6]['type']=='ON' and w[6]['eligible'] and w[6]['group'] in c['on'], id
        assert all(isinstance(v,str) and v.strip() for v in w[:4]), id
        assert len(w[0])>1 and not re.search(r'[○…]',w[0]), id
        assert not any(re.search(r'[一-龯]',v) for v in w[2:4]), id
    for e in excluded:
        assert e['reason']
        if e['category']=='duplicate':
            assert e['duplicateOf'] in included
            assert by_id[e['id']][1][:2] == by_id[e['duplicateOf']][1][:2]

    # Protect non-obvious reviewed inclusions; kana alone is not a KUN classifier.
    assert {'EX-00121','EX-00176','EX-00342','EX-00343','EX-00361',
            'EX-00648','EX-00689','EX-00722','EX-00754','EX-00763'} <= set(included)
    assert {'EX-00339','EX-00411','EX-00460','EX-00720','EX-00833'} <= excluded_ids
    assert {'EX-00987','EX-01009','EX-01054','EX-01089','EX-01090','EX-01156'} <= excluded_ids
    assert {'EX-00919','EX-00948','EX-01146','EX-01205','EX-01279'} <= set(included)
    assert sum(by_id[id][0]['id'] <= 204 for id in included) == 537
    assert sum(205 <= by_id[id][0]['id'] <= 252 for id in included) == 96
    assert sum(253 <= by_id[id][0]['id'] <= 300 for id in included) == 137
    hidden = set(visibility['hiddenExampleIds'])
    assert hidden & set(included) == {'EX-00164'}
    visible = [id for id in included if id not in hidden]
    assert len(visible) == 769
    assert {'EX-00163','EX-00165'} <= set(visible), 'Other 一 examples must remain'
    assert by_id['EX-00164'][1][:2] == ['一座','ichiza'], 'Hidden record stays in cards'
    by_source = {r['A']:r for r in rows}
    assert sum(by_source[id]['G']=='KUN' for id in hidden) == 19
    assert hashlib.sha256(source.read_bytes()).hexdigest() == digest
    print('PASS: 1299 exact ID joins, 1297 translated examples; '
          '790 ON decisions = 770 approved + 20 documented exclusions; '
          '769 visible / 1 hidden by ID; all 19 KUN flags preserved; no duplicate '
          'IDs or spelling/reading pairs; source workbook unchanged.')


if __name__=='__main__':
    main(Path(sys.argv[1]))
