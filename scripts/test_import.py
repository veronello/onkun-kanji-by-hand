"""Integrity checks for the workbook export and its publication policy."""
import hashlib
import json
import re
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
        second = [w for c in self.cards[12:24] for w in c['words']]
        third = [w for c in self.cards[24:48] for w in c['words']]
        fourth = [w for c in self.cards[48:72] for w in c['words']]
        fifth = [w for c in self.cards[72:84] for w in c['words']]
        sixth = [w for c in self.cards[84:108] for w in c['words']]
        seventh = [w for c in self.cards[108:132] for w in c['words']]
        eighth = [w for c in self.cards[132:156] for w in c['words']]
        self.assertEqual(len(eighth),127)
        self.assertTrue(all(w[2] and w[3] for w in eighth))
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in eighth),54)
        self.assertEqual([w[6]['id'] for w in eighth],[f'EX-{n:05d}' for n in range(575,702)])
        ninth = [w for c in self.cards[156:180] for w in c['words']]
        self.assertEqual(len(ninth),106)
        self.assertTrue(all(w[2] and w[3] for w in ninth))
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in ninth),47)
        self.assertEqual([w[6]['id'] for w in ninth],[f'EX-{n:05d}' for n in range(702,808)])
        tenth = [w for c in self.cards[180:204] for w in c['words']]
        self.assertEqual(len(tenth),106)
        self.assertTrue(all(w[2] and w[3] for w in tenth))
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in tenth),50)
        self.assertEqual([w[6]['id'] for w in tenth],[f'EX-{n:05d}' for n in range(808,914)])
        self.assertEqual(len(first),46)
        self.assertEqual(len(second),50)
        self.assertEqual(len(third),101)
        self.assertEqual(len(fourth),107)
        self.assertEqual(len(fifth),54)
        self.assertEqual(len(sixth),107)
        self.assertEqual(len(seventh),109)
        self.assertTrue(all(w[2] and w[3] for w in first))
        self.assertTrue(all(w[2] and w[3] for w in second))
        self.assertTrue(all(w[2] and w[3] for w in third))
        self.assertTrue(all(w[2] and w[3] for w in fourth))
        self.assertTrue(all(w[2] and w[3] for w in fifth))
        self.assertTrue(all(w[2] and w[3] for w in sixth))
        self.assertTrue(all(w[2] and w[3] for w in seventh))
        eleventh = [w for c in self.cards[204:228] for w in c['words']]
        self.assertEqual(len(eleventh),95)
        self.assertEqual([w[6]['id'] for w in eleventh],[f'EX-{n:05d}' for n in range(914,1009)])
        self.assertTrue(all(w[2] and w[3] for w in eleventh if w[6]['eligible']))
        self.assertEqual([w[6]['id'] for w in eleventh if not w[6]['eligible']],['EX-00998'])
        self.assertTrue(all(not w[2] and not w[3] for w in eleventh if not w[6]['eligible']))
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in eleventh),36)
        twelfth = [w for c in self.cards[228:252] for w in c['words']]
        self.assertEqual(len(twelfth),86)
        self.assertEqual([w[6]['id'] for w in twelfth],[f'EX-{n:05d}' for n in range(1009,1095)])
        self.assertTrue(all(w[2] and w[3] for w in twelfth if w[6]['eligible']))
        self.assertEqual([w[6]['id'] for w in twelfth if not w[6]['eligible']],['EX-01019'])
        self.assertTrue(all(not w[1] and not w[2] and not w[3] for w in twelfth if not w[6]['eligible']))
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in twelfth),25)
        thirteenth = [w for c in self.cards[252:276] for w in c['words']]
        self.assertEqual(len(thirteenth),98)
        self.assertEqual([w[6]['id'] for w in thirteenth],[f'EX-{n:05d}' for n in range(1095,1193)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in thirteenth))
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in thirteenth),28)
        fourteenth = [w for c in self.cards[276:300] for w in c['words']]
        self.assertEqual(len(fourteenth),107)
        self.assertEqual([w[6]['id'] for w in fourteenth],[f'EX-{n:05d}' for n in range(1193,1300)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in fourteenth))
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in fourteenth),35)
        fifteenth = [w for c in self.cards[300:324] for w in c['words']]
        self.assertEqual(len(fifteenth),102)
        self.assertEqual([w[6]['id'] for w in fifteenth],[f'EX-{n:05d}' for n in range(1300,1402)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in fifteenth))
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in fifteenth),41)
        sixteenth = [w for c in self.cards[324:348] for w in c['words']]
        self.assertEqual(len(sixteenth),96)
        self.assertEqual([w[6]['id'] for w in sixteenth],[f'EX-{n:05d}' for n in range(1402,1498)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in sixteenth))
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in sixteenth),48)
        seventeenth = [w for c in self.cards[348:372] for w in c['words']]
        self.assertEqual(len(seventeenth),118)
        self.assertEqual([w[6]['id'] for w in seventeenth],[f'EX-{n:05d}' for n in range(1498,1616)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in seventeenth))
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in seventeenth),39)
        eighteenth = [w for c in self.cards[372:396] for w in c['words']]
        self.assertEqual(len(eighteenth),109)
        self.assertEqual([w[6]['id'] for w in eighteenth],[f'EX-{n:05d}' for n in range(1616,1725)])
        self.assertEqual([w[6]['id'] for w in eighteenth if not w[6]['eligible']],['EX-01658'])
        self.assertTrue(all(w[2] and w[3] for w in eighteenth if w[6]['eligible']))
        self.assertTrue(all(not w[1] and not w[2] and not w[3] for w in eighteenth if not w[6]['eligible']))
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in eighteenth),34)
        self.assertTrue(all(not w[2] and not w[3] for c in self.cards[396:] for w in c['words']))
        translations = json.loads((ROOT/'data/translations-12.json').read_text())
        self.assertEqual(len(translations),1721)
        self.assertEqual(sum(bool(t.get('reviewFlag')) for t in translations.values()),687)
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in third),40)
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in fourth),46)
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in fifth),29)
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in sixth),55)
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in seventh),60)
        self.assertEqual([w[6]['id'] for w in third],[f'EX-{n:05d}' for n in range(97,198)])
        self.assertEqual([w[6]['id'] for w in fourth],[f'EX-{n:05d}' for n in range(198,305)])
        self.assertEqual([w[6]['id'] for w in fifth],[f'EX-{n:05d}' for n in range(305,359)])
        self.assertEqual([w[6]['id'] for w in sixth],[f'EX-{n:05d}' for n in range(359,466)])
        self.assertEqual([w[6]['id'] for w in seventh],[f'EX-{n:05d}' for n in range(466,575)])
        for w in first + second + third + fourth + fifth + sixth + seventh + eighth + ninth + tenth + thirteenth + fourteenth + fifteenth + sixteenth + seventeenth + [w for w in eleventh + twelfth + eighteenth if w[6]['eligible']]:
            t = translations[w[6]['id']]
            self.assertEqual((w[0],w[1]),(t['jp'],t['romaji']))
            self.assertEqual((w[2],w[3]),(t['ru'],t['en']))
            self.assertTrue(t['sources'] and all(s['url'].startswith(('https://kotobank.jp/','https://dictionary.goo.ne.jp/','https://www.kanjipedia.jp/','https://www.jlogos.com/','https://www.edrdg.org/','https://www.bunka.go.jp/')) for s in t['sources']))
            self.assertEqual(w[6].get('translationReview'),t.get('reviewFlag'))
        self.assertEqual([c['id'] for c in self.cards if not c['words']],[1423])

    def test_previous_translation_entries_preserved(self):
        translations = json.loads((ROOT/'data/translations-12.json').read_text())
        previous = {k: v for k, v in translations.items() if int(k[3:]) <= 1615}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Complete first-372 baseline before adding cards 373–396.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         '16b008cc3c6cec150357dec45fd8b1f395fd31770b271677d938d3f511a7e9bf')
        previous = {k: v for k, v in translations.items() if int(k[3:]) <= 1497}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Complete first-348 baseline before adding cards 349–372.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         'a0a6dbce583f3ad72c71916ec7540d5c6e17b4049ccce88f01c7c27781fd0deb')
        previous = {k: v for k, v in translations.items() if int(k[3:]) <= 1401}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Complete first-324 baseline before adding cards 325–348.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         '87fb0d763cc5bb266feaaab980392b35fef5fafdbb254ce97269ceb001820133')
        previous = {k: v for k, v in translations.items() if int(k[3:]) <= 1299}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Complete first-300 baseline before adding cards 301–324.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         '12d7d1ae0f37609144e4fc886e12393929abc8b913b9a00019f12628c121402e')
        previous = {k: v for k, v in translations.items() if int(k[3:]) <= 1192}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Full first-276 baseline before adding kanji 277–300.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         'e4bae1616a15920449603755296e561b8e44434d7bcddd87b198bec337b5b8a2')
        previous = {k: v for k, v in translations.items() if int(k[3:]) <= 1094}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Full first-252 baseline before adding kanji 253–276.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         '3b79f76d51bb5bc81b22c0caba3cb3fec256bdfc19b69986c483e68d0194963a')
        previous = {k: v for k, v in translations.items() if int(k[3:]) <= 1008}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Full first-228 baseline before adding kanji 229–252.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         'aa5efae0f35515d151d1ea661179bae4ece4e5cd47aed6489b1175e4271b6662')
        previous = {f'EX-{n:05d}': translations[f'EX-{n:05d}'] for n in range(1,914)}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Full first-204 baseline before adding kanji 205–228.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         'd144b0c83f545d208ec00034e3808581dea3e89b681d87b87e523f6183263122')
        previous = {f'EX-{n:05d}': translations[f'EX-{n:05d}'] for n in range(1,97)}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Baseline from c5a6f68; change only after explicitly reviewing earlier translations.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         'abdffe8b3ddb6e8fb155423eb91ab162e90915609776be80d2ee0d7c30cf4c8b')
        previous = {f'EX-{n:05d}': translations[f'EX-{n:05d}'] for n in range(1,198)}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Full first-48 baseline from 62eafed.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         '94717011e5a5ea2507e78be12d1338c1b89ca9a4108426ef963541c448e496bf')
        previous = {f'EX-{n:05d}': translations[f'EX-{n:05d}'] for n in range(1,305)}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Full first-72 baseline from 0c16f31; display-only note overrides are separate.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         'a80122f8ddda15248dc3b5848b2d189136b57a5ca714458efc22dacd8fb846d1')
        previous = {f'EX-{n:05d}': translations[f'EX-{n:05d}'] for n in range(1,359)}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Full first-84 baseline before adding kanji 85–108.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         '1bee857104d1f5b92c1dce4861b6fd24b863e012368387a214b7bef43e5860c1')
        previous = {f'EX-{n:05d}': translations[f'EX-{n:05d}'] for n in range(1,466)}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Full first-108 baseline before adding kanji 109–132.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         '56979ae9f44f5cf805e5f8a480d53d325e73a63d973b950993998ce16b69aa27')

        previous = {f'EX-{n:05d}': translations[f'EX-{n:05d}'] for n in range(1,575)}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Full first-132 baseline before adding kanji 133–156.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         'b6d22ba051c74c77503ba30b2dd14d151a56e0f38dd1b84b7e3c8689304b26d3')

        previous = {f'EX-{n:05d}': translations[f'EX-{n:05d}'] for n in range(1,702)}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Full first-156 baseline before adding kanji 157–180.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         'c3a8fbf69071ece8133743357565218971dd9495f10937c20b016b928a7f33ec')

        previous = {f'EX-{n:05d}': translations[f'EX-{n:05d}'] for n in range(1,808)}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Full first-180 baseline before adding kanji 181–204.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         'd0b8e81d7878a2bdd545ae0587bbb821e4a0ddd060eebd5d0261ed47189a2a2c')

    def test_display_notes_keep_editorial_data(self):
        translations = json.loads((ROOT/'data/translations-12.json').read_text())
        notes = json.loads((ROOT/'data/card-display-notes.json').read_text())
        words = {w[6]['id']: w for c in self.cards for w in c['words']}
        # Review flags and the complete original notes remain available for editing.
        for key, t in translations.items():
            w = words[key]
            self.assertEqual(w[4:6], [t['noteRu'], t['noteEn']])
            self.assertEqual(w[6].get('translationReview'), t.get('reviewFlag'))
            display = w[6].get('displayNotes', dict(ru=w[4], en=w[5]))
            self.assertNotRegex(display['ru'] + ' ' + display['en'],
                                r'\bH\b|workbook|исходн|столб')
        for key, note in notes.items():
            w = words[key]
            self.assertEqual((note['jp'], note['romaji']), tuple(w[:2]))
            self.assertEqual(w[6]['displayNotes'], dict(ru=note['ru'], en=note['en']))
        self.assertEqual(words['EX-00177'][6]['displayNotes'], dict(ru='', en=''))
        self.assertEqual(sum('displayNotes' in w[6] for w in words.values()), 19)
        self.assertEqual(sum(bool(re.search(r'\bH\b', t['noteRu'] + t['noteEn']))
                             for t in translations.values()), 17)

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
