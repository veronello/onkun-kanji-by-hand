#!/usr/bin/env python3
"""Import only visibility flags from Excel, joining every copied field by ID/header.

Usage: python scripts/import_drill_visibility.py workbook.xlsx [--check]
No workbook or card data is written. ON consumes these flags only when opted in.
"""
import argparse
import hashlib
import json
import re
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'data/drill-visibility.json'
NS = {'s': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}


def read_sheet(archive, name, strings):
    workbook = ET.fromstring(archive.read('xl/workbook.xml'))
    rels = ET.fromstring(archive.read('xl/_rels/workbook.xml.rels'))
    targets = {node.get('Id'): node.get('Target') for node in rels}
    matches = [node for node in workbook.find('s:sheets', NS)
               if node.get('name').strip() == name]
    if len(matches) != 1:
        raise ValueError(f'Expected one worksheet: {name}')
    sheet = matches[0]
    target = targets[sheet.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id')]
    path = target.lstrip('/') if target.startswith('/') else 'xl/' + target
    rows = []
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
            if value:
                if cell.find('s:f', NS) is not None:
                    raise ValueError(f'Formula instead of source value: {cell.get("r")}')
                cells[col] = value
        if cells:
            rows.append(cells)
    headers = {col: value.strip() for col, value in rows[0].items()}
    if len(set(headers.values())) != len(headers):
        raise ValueError(f'Duplicate headers: {name}')
    required = {'ID', 'Hide from website'} if name.endswith('hide readings') else {'ID'}
    if not required <= set(headers.values()):
        raise ValueError(f'Missing required headers: {name}')
    return [{headers[col]: value for col, value in row.items()} for row in rows[1:]]


def build_visibility(source):
    with zipfile.ZipFile(source) as archive:
        strings = []
        if 'xl/sharedStrings.xml' in archive.namelist():
            strings = [''.join(node.itertext()) for node in
                       ET.fromstring(archive.read('xl/sharedStrings.xml')).findall('s:si', NS)]
        original = read_sheet(archive, 'OnKun Examples', strings)
        marked = read_sheet(archive, 'OnKun Examples hide readings', strings)
    by_id = {row['ID']: row for row in original}
    if len(by_id) != len(original):
        raise ValueError('Duplicate source IDs')
    marked_ids = [row['ID'] for row in marked]
    if len(set(marked_ids)) != len(marked_ids) or set(marked_ids) != set(by_id):
        raise ValueError('Visibility sheet must contain every source ID exactly once')
    hidden = set()
    for row in marked:
        row = row.copy()
        flag = row.pop('Hide from website', '').strip().upper()
        id = row['ID']
        if row != by_id[id]:
            raise ValueError(f'Copied source columns differ for {id}; review before importing')
        if flag not in ('', 'YES', 'NO'):
            raise ValueError(f'Unknown Hide from website value for {id}: {flag}')
        if flag == 'YES':
            hidden.add(id)
    # Follow the original ID order, independently of sorting on the visibility sheet.
    return {
        'schemaVersion': 1,
        'sourceWorkbook': source.name,
        'sourceSha256': hashlib.sha256(source.read_bytes()).hexdigest(),
        'sourceSheet': 'OnKun Examples hide readings ',
        'sourceColumn': 'Hide from website',
        'hiddenExampleIds': [id for id in by_id if id in hidden],
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('source', type=Path)
    parser.add_argument('--check', action='store_true', help='Verify JSON without changing it')
    args = parser.parse_args()
    result = build_visibility(args.source)
    if args.check:
        expected = json.loads(OUTPUT.read_text())
        result['sourceWorkbook'] = expected['sourceWorkbook']  # Downloaded copies can be renamed.
        assert expected == result, 'Visibility JSON differs from workbook'
    else:
        OUTPUT.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n')
    print(f'{"Verified" if args.check else "Imported"}: {len(result["hiddenExampleIds"])} hidden IDs; workbook unchanged.')


if __name__ == '__main__':
    main()
