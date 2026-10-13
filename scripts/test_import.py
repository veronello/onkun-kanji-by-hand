"""Integrity checks for the workbook export and its publication policy."""
import hashlib
import json
import tempfile
import unittest
from pathlib import Path
import openpyxl
from import_excel import ROOT, import_workbook

class ImportTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.source = ROOT / 'sources/OnKun_Romaji_Reviewed.xlsx'
        cls.data = ROOT / 'data/excel'
        cls.manifest = json.loads((cls.data/'manifest.json').read_text())
        cls.cards = [c for name in cls.manifest['chunks'] for c in json.loads((cls.data/name).read_text())]
        cls.records = json.loads((cls.data/'source-records.json').read_text())

    def test_counts_and_associations(self):
        self.assertEqual([c['id'] for c in self.cards], list(range(1,2137)))
        self.assertEqual(len({c['kanji'] for c in self.cards}), 2136)
        words = [w for c in self.cards for w in c['words']]
        self.assertEqual(len(words), 9555)
        self.assertEqual(len({w[6]['id'] for w in words}), 9555)
        by_id = {r[0]: r for r in self.records['rows']}
        for c in self.cards:
            for w in c['words']:
                r = by_id[w[6]['id']]
                self.assertEqual(int(r[1]), c['id'])
                self.assertEqual(r[2], c['kanji'])
                self.assertEqual(w[0], r[4])
                self.assertEqual(w[6]['group'], r[5])
                self.assertEqual(w[6]['type'], r[6])
                self.assertEqual(w[1], r[7] if w[6]['eligible'] else '')

    def test_original_records_and_romaji_untouched(self):
        book = openpyxl.load_workbook(self.source, read_only=True, data_only=True)
        original = [list(r) for r in book['OnKun Examples'].values if any(x is not None for x in r)]
        self.assertEqual(self.records, {'columns': original[0], 'rows':original[1:]})
        self.assertEqual(sum(bool(r[7]) for r in original[1:]), 9543)
        self.assertEqual(self.manifest['sha256'], hashlib.sha256(self.source.read_bytes()).hexdigest())

    def test_deferred_readings_never_published(self):
        words = [w for c in self.cards for w in c['words']]
        self.assertEqual(sum(not w[6]['eligible'] for w in words),19)
        self.assertEqual(sum('○' in w[0] for w in words),13)
        for w in words:
            if '○' in w[0] or w[6]['romajiStatus'].startswith(('ПРЕДВАРИТЕЛЬНО','НЕОДНОЗНАЧНО')):
                self.assertFalse(w[6]['eligible'])
                self.assertEqual(w[1], '')
        manual = [w for w in words if w[6]['romajiStatus']=='ПРИНЯТО · ручная проверка']
        self.assertEqual(len(manual),2)
        self.assertTrue(all(w[6]['eligible'] for w in manual))

    def test_translations_and_empty_kanji(self):
        first = [w for c in self.cards[:12] for w in c['words']]
        self.assertEqual(len(first),46)
        self.assertTrue(all(w[2] and w[3] for w in first))
        self.assertTrue(all(not w[2] and not w[3] for c in self.cards[12:] for w in c['words']))
        self.assertEqual([c['id'] for c in self.cards if not c['words']],[1423])

    def test_rebuild_is_deterministic_and_read_only(self):
        before = self.source.read_bytes()
        with tempfile.TemporaryDirectory() as folder:
            output = Path(folder)
            import_workbook(self.source, output)
            for path in self.data.rglob('*.json'):
                self.assertEqual(path.read_bytes(), (output/path.relative_to(self.data)).read_bytes())
        self.assertEqual(before, self.source.read_bytes())

if __name__ == '__main__':
    unittest.main()
