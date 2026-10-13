#!/usr/bin/env python3
"""Read the reviewed workbook without modifying it. Never generate readings."""
import argparse
import hashlib
import json
import re
from collections import Counter
from pathlib import Path
import openpyxl

ROOT = Path(__file__).resolve().parents[1]
ACCEPTED = {'СЛОВАРЬ', 'СОСТАВ / ФОРМА', 'ДРУГОЙ ИСТОЧНИК', 'ПРИНЯТО · ручная проверка'}

def write(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, separators=(',', ':')) + '\n', encoding='utf-8')

def import_workbook(source, output):
    digest = hashlib.sha256(source.read_bytes()).hexdigest()
    book = openpyxl.load_workbook(source, read_only=True, data_only=True)
    def sheet(name):
        return [list(r) for r in book[name].values if any(v is not None for v in r)]
    examples = sheet('OnKun Examples')
    audit = sheet('Romaji Audit')
    review = sheet('Romaji Review')
    official = sheet('本表 2136字')
    rows = examples[1:]
    assert len(rows) == 9555, f'Expected 9555 records, got {len(rows)}'
    assert len({r[0] for r in rows}) == len(rows), 'Duplicate example IDs'
    assert len(audit[1:]) == len(rows), 'Incomplete Romaji Audit'
    audited = {r[0]: r for r in audit[1:]}
    translations = json.loads((ROOT / 'data/translations-12.json').read_text())
    cards = {}
    for r in official[1:]:
        if not str(r[0]).isdigit():
            continue
        n = int(r[0]); readings = (r[2] or '').splitlines()
        cards[n] = dict(id=n, kanji=str(r[1])[0], originalKanji=r[1],
                        readings=readings, on=[x for x in readings if re.search('[ァ-ヶ]', x)],
                        kun=[[x, '', ''] for x in readings if not re.search('[ァ-ヶ]', x)],
                        meaning=['', ''], words=[], notes=r[9] or '')
    assert len(cards) == 2136, f'Expected 2136 kanji, got {len(cards)}'
    deferred = []
    for excel_row, r in enumerate(rows, 2):
        assert int(r[1]) in cards, f'Unknown kanji: {r[0]}'
        assert r[2] == cards[int(r[1])]['kanji'], f'Kanji mismatch: {r[0]}'
        assert r[0] in audited, f'Missing audit: {r[0]}'
        eligible = r[18] in ACCEPTED and bool(r[7]) and '○' not in str(r[4])
        t = translations.get(r[0], {})
        # Guard translation overlays against changed IDs/words/readings on refresh.
        if t:
            assert t['jp'] == r[4] and t['romaji'] == r[7], f'Stale translation: {r[0]}'
            assert t['sources'] and t['status'] == 'dictionary-reviewed'
        words = [r[4], r[7] if eligible else '', r[8] or t.get('ru', ''),
                 r[9] or t.get('en', ''), t.get('noteRu', ''), t.get('noteEn', ''),
                 dict(id=r[0], excelRow=excel_row, group=r[5], type=r[6],
                      romajiStatus=r[18], eligible=eligible, originalExample=r[3],
                      annotation=r[16], source=r[14], translationStatus=t.get('status', 'pending'))]
        cards[int(r[1])]['words'].append(words)
        if not eligible:
            deferred.append(dict(id=r[0], kanji=r[2], jp=r[4], romaji=r[7],
                                 status=r[18], reason=r[20], excelRow=excel_row,
                                 category='template' if '○' in str(r[4]) else 'reading-review'))
    assert hashlib.sha256(source.read_bytes()).hexdigest() == digest
    ordered = list(cards.values())
    chunks = []
    for offset in range(0, len(ordered), 48):
        path = f'cards/{offset // 48:03d}.json'
        write(output / path, ordered[offset:offset + 48]); chunks.append(path)
    stats = dict(kanji=len(cards), examples=len(rows), romaji=sum(bool(r[7]) for r in rows),
                 eligibleExamples=len(rows)-len(deferred), deferredExamples=len(deferred),
                 deferredReasons=dict(Counter(x['category'] for x in deferred)),
                 translations=len(translations), translatedValues=2*len(translations),
                 kanjiWithoutExamples=[c['id'] for c in ordered if not c['words']])
    write(output / 'manifest.json', dict(schemaVersion=1, source=source.name,
          sha256=digest, chunkSize=48, chunks=chunks, stats=stats,
          index=[dict(id=c['id'], kanji=c['kanji']) for c in ordered]))
    # Complete source rows and all audit/review fields remain available separately.
    write(output / 'source-records.json', dict(columns=examples[0], rows=rows))
    write(output / 'romaji-audit.json', dict(columns=audit[0], rows=audit[1:]))
    write(output / 'romaji-review.json', dict(columns=review[0], rows=review[1:], deferred=deferred))
    print(json.dumps(stats, ensure_ascii=False, indent=2))

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--source', type=Path, default=ROOT/'sources/OnKun_Romaji_Reviewed.xlsx')
    parser.add_argument('--output', type=Path, default=ROOT/'data/excel')
    args = parser.parse_args()
    import_workbook(args.source, args.output)
