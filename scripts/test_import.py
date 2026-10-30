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
        nineteenth = [w for c in self.cards[396:420] for w in c['words']]
        self.assertEqual(len(nineteenth),132)
        self.assertEqual([w[6]['id'] for w in nineteenth],[f'EX-{n:05d}' for n in range(1725,1857)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in nineteenth))
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in nineteenth),33)
        self.assertEqual([(w[0],w[1]) for w in nineteenth if w[0]=='脅かす'],
                         [('脅かす','obiyakasu'),('脅かす','odokasu')])
        twentieth = [w for c in self.cards[420:444] for w in c['words']]
        self.assertEqual(len(twentieth),114)
        self.assertEqual([w[6]['id'] for w in twentieth],[f'EX-{n:05d}' for n in range(1857,1971)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in twentieth))
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in twentieth),32)
        self.assertEqual([(w[0],w[1],w[6]['romajiStatus']) for w in twentieth
                          if w[6]['romajiStatus']!='СЛОВАРЬ'],[('僅かだ','wazuka da','СОСТАВ / ФОРМА')])
        twenty_first = [w for c in self.cards[444:468] for w in c['words']]
        self.assertEqual(len(twenty_first),99)
        self.assertEqual([w[6]['id'] for w in twenty_first],[f'EX-{n:05d}' for n in range(1971,2070)])
        self.assertEqual([w[6]['id'] for w in twenty_first if not w[6]['eligible']],['EX-02061'])
        self.assertTrue(all(w[2] and w[3] for w in twenty_first if w[6]['eligible']))
        self.assertTrue(all(not w[1] and not w[2] and not w[3] for w in twenty_first if not w[6]['eligible']))
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in twenty_first),23)
        self.assertEqual([(w[0],w[1]) for w in twenty_first if w[0]=='空'],[('空','sora'),('空','kara')])
        self.assertEqual([(w[0],w[1],w[6]['romajiStatus']) for w in twenty_first
                          if w[6]['eligible'] and w[6]['romajiStatus']!='СЛОВАРЬ'],[('愚かだ','oroka da','СОСТАВ / ФОРМА')])
        twenty_second = [w for c in self.cards[468:492] for w in c['words']]
        self.assertEqual(len(twenty_second),113)
        self.assertEqual([w[6]['id'] for w in twenty_second],[f'EX-{n:05d}' for n in range(2070,2183)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in twenty_second))
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in twenty_second),49)
        self.assertEqual([(w[0],w[1]) for w in twenty_second if w[0]=='形'],[('形','kata'),('形','katachi')])
        self.assertEqual([(w[0],w[1]) for w in twenty_second if w[6]['romajiStatus']!='СЛОВАРЬ'],
                         [('庶務係','shomugakari'),('軽々と','karugaru to'),('手軽だ','tegaru da'),('軽やかだ','karoyaka da')])
        twenty_third = [w for c in self.cards[492:516] for w in c['words']]
        self.assertEqual(len(twenty_third),99)
        self.assertEqual([w[6]['id'] for w in twenty_third],[f'EX-{n:05d}' for n in range(2183,2282)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in twenty_third))
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in twenty_third),49)
        self.assertEqual([(w[0],w[1]) for w in twenty_third if w[6]['romajiStatus']!='СЛОВАРЬ'],[('激しさ','hageshisa')])
        self.assertEqual([(w[0],w[1]) for w in twenty_third if w[0] in ['憧憬','墓穴','鼻血','元結']],
                         [('憧憬','shōkei'),('墓穴','boketsu'),('鼻血','hanaji'),('元結','motoyui')])
        twenty_fourth = [w for c in self.cards[516:540] for w in c['words']]
        self.assertEqual([w[6]['id'] for w in twenty_fourth], [f'EX-{n:05d}' for n in range(2282,2381)])
        self.assertEqual(sum(bool(w[2]) and bool(w[3]) for w in twenty_fourth),97)
        self.assertTrue(all(w[2] and w[3] for w in twenty_fourth if w[6]['eligible']))
        self.assertEqual([w[6]['id'] for w in twenty_fourth if not w[6]['eligible']], ['EX-02297','EX-02303'])
        self.assertTrue(all(not w[1] and not w[2] and not w[3] for w in twenty_fourth if not w[6]['eligible']))
        self.assertTrue(all(not w[2] and not w[3] for c in self.cards[996:] for w in c['words']))
        twenty_fifth = [w for c in self.cards[540:564] for w in c['words']]
        self.assertEqual(len(twenty_fifth),126)
        self.assertEqual([w[6]['id'] for w in twenty_fifth], [f'EX-{n:05d}' for n in range(2381,2507)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in twenty_fifth))
        self.assertEqual(sum(bool(w[6].get('translationReview')) for w in twenty_fifth),54)
        batch = [w for c in self.cards[564:588] for w in c['words']]
        self.assertEqual(len(batch),119)
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in batch))
        self.assertEqual([w[6]['id'] for w in batch], [f'EX-{n:05d}' for n in range(2507,2626)])
        latest = [w for c in self.cards[588:612] for w in c['words']]
        self.assertEqual(len(latest),132)
        self.assertTrue(all(w[2] and w[3] for w in latest if w[6]['eligible']))
        self.assertEqual([w[6]['id'] for w in latest if not w[6]['eligible']], ['EX-02641'])
        self.assertTrue(all(not w[1] and not w[2] and not w[3] for w in latest if not w[6]['eligible']))
        newest = [w for c in self.cards[612:636] for w in c['words']]
        self.assertEqual(len(newest),116)
        self.assertEqual([w[6]['id'] for w in newest], [f'EX-{n:05d}' for n in range(2758,2874)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in newest))
        next_batch = [w for c in self.cards[636:660] for w in c['words']]
        self.assertEqual(len(next_batch),94)
        self.assertEqual([w[6]['id'] for w in next_batch], [f'EX-{n:05d}' for n in range(2874,2968)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in next_batch))
        extra = [w for c in self.cards[660:684] for w in c['words']]
        self.assertEqual(len(extra),99)
        self.assertEqual([w[6]['id'] for w in extra], [f'EX-{n:05d}' for n in range(2968,3067)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in extra))
        added = [w for c in self.cards[684:708] for w in c['words']]
        self.assertEqual(len(added),102)
        self.assertEqual([w[6]['id'] for w in added], [f'EX-{n:05d}' for n in range(3067,3169)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in added))
        added709 = [w for c in self.cards[708:732] for w in c['words']]
        self.assertEqual(len(added709),88)
        self.assertEqual([w[6]['id'] for w in added709], [f'EX-{n:05d}' for n in range(3169,3257)])
        self.assertTrue(all(w[2] and w[3] for w in added709 if w[6]['eligible']))
        self.assertEqual([w[6]['id'] for w in added709 if not w[6]['eligible']], ['EX-03224'])
        added733 = [w for c in self.cards[732:756] for w in c['words']]
        self.assertEqual(len(added733),111)
        self.assertEqual([w[6]['id'] for w in added733], [f'EX-{n:05d}' for n in range(3257,3368)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in added733))
        added757 = [w for c in self.cards[756:780] for w in c['words']]
        self.assertEqual(len(added757),119)
        self.assertEqual([w[6]['id'] for w in added757], [f'EX-{n:05d}' for n in range(3368,3487)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in added757))
        added781 = [w for c in self.cards[780:804] for w in c['words']]
        self.assertEqual(len(added781),96)
        self.assertEqual([w[6]['id'] for w in added781], [f'EX-{n:05d}' for n in range(3487,3583)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in added781))
        added805 = [w for c in self.cards[804:828] for w in c['words']]
        self.assertEqual(len(added805),106)
        self.assertEqual([w[6]['id'] for w in added805], [f'EX-{n:05d}' for n in range(3583,3689)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in added805))
        added829 = [w for c in self.cards[828:852] for w in c['words']]
        self.assertEqual(len(added829),105)
        self.assertEqual([w[6]['id'] for w in added829], [f'EX-{n:05d}' for n in range(3689,3794)])
        self.assertTrue(all(w[2] and w[3] for w in added829 if w[6]['eligible']))
        self.assertEqual([w[6]['id'] for w in added829 if not w[6]['eligible']], ['EX-03691'])
        self.assertTrue(all(not w[1] and not w[2] and not w[3] for w in added829 if not w[6]['eligible']))
        added853 = [w for c in self.cards[852:876] for w in c['words']]
        self.assertEqual(len(added853),127)
        self.assertEqual([w[6]['id'] for w in added853], [f'EX-{n:05d}' for n in range(3794,3921)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in added853))
        translations = json.loads((ROOT/'data/translations-12.json').read_text())
        previous = {k:v for k,v in translations.items() if int(k[3:]) < 3794}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        self.assertEqual(hashlib.sha256(normalized).hexdigest(), 'fb023d6d1ff0332390424497975499c8d73d1710784719a50120a944d377f7c2')
        added877 = [w for c in self.cards[876:900] for w in c['words']]
        self.assertEqual(len(added877),108)
        self.assertEqual([w[6]['id'] for w in added877], [f'EX-{n:05d}' for n in range(3921,4029)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in added877))
        added901 = [w for c in self.cards[900:924] for w in c['words']]
        self.assertEqual(len(added901),128)
        self.assertEqual([w[6]['id'] for w in added901], [f'EX-{n:05d}' for n in range(4029,4157)])
        self.assertEqual([w[6]['id'] for w in added901 if not w[6]['eligible']], ['EX-04102'])
        self.assertTrue(all(w[2] and w[3] for w in added901 if w[6]['eligible']))
        self.assertTrue(all(not any(w[1:4]) for w in added901 if not w[6]['eligible']))
        added925 = [w for c in self.cards[924:948] for w in c['words']]
        self.assertEqual(len(added925),100)
        self.assertEqual([w[6]['id'] for w in added925], [f'EX-{n:05d}' for n in range(4157,4257)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in added925))
        added949 = [w for c in self.cards[948:972] for w in c['words']]
        self.assertEqual(len(added949),112)
        self.assertEqual([w[6]['id'] for w in added949], [f'EX-{n:05d}' for n in range(4257,4369)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in added949))
        floors = {w[1]:w for c in self.cards[948:972] for w in c['words'] if w[0]=='床'}
        self.assertEqual(set(floors), {'toko','yuka'})
        self.assertNotEqual(floors['toko'][2:4],floors['yuka'][2:4])
        added973 = [w for c in self.cards[972:996] for w in c['words']]
        self.assertEqual(len(added973),89)
        self.assertEqual([w[6]['id'] for w in added973], [f'EX-{n:05d}' for n in range(4369,4458)])
        self.assertTrue(all(w[6]['eligible'] and w[2] and w[3] for w in added973))
        self.assertEqual(len(translations),4447)
        self.assertEqual(sum(bool(t.get('reviewFlag')) for t in translations.values()),2007)
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
        for w in first + second + third + fourth + fifth + sixth + seventh + eighth + ninth + tenth + thirteenth + fourteenth + fifteenth + sixteenth + seventeenth + nineteenth + twentieth + twenty_second + twenty_third + twenty_fifth + [w for w in eleventh + twelfth + eighteenth + twenty_first if w[6]['eligible']]:
            t = translations[w[6]['id']]
            self.assertEqual((w[0],w[1]),(t['jp'],t['romaji']))
            self.assertEqual((w[2],w[3]),(t['ru'],t['en']))
            self.assertTrue(t['sources'] and all(s['url'].startswith(('https://kotobank.jp/','https://dictionary.goo.ne.jp/','https://www.kanjipedia.jp/','https://www.jlogos.com/','https://www.edrdg.org/','https://www.bunka.go.jp/')) for s in t['sources']))
            self.assertEqual(w[6].get('translationReview'),t.get('reviewFlag'))
        self.assertEqual([c['id'] for c in self.cards if not c['words']],[1423])

    def test_previous_translation_entries_preserved(self):
        translations = json.loads((ROOT/'data/translations-12.json').read_text())
        previous829 = {k: v for k,v in translations.items() if int(k[3:]) < 3689}
        self.assertEqual(hashlib.sha256(json.dumps(previous829,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()).hexdigest(), 'ceffc976f1078672e344550a72369f10afdb4ce42739ecaedb96924144fd0d6c')
        previous805 = {k: v for k,v in translations.items() if int(k[3:]) < 3583}
        self.assertEqual(hashlib.sha256(json.dumps(previous805,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()).hexdigest(), '499008d046895379fd844d19c7f4f348057b0070687274e720a15d8e528e56eb')
        previous781 = {k: v for k,v in translations.items() if int(k[3:]) < 3487}
        self.assertEqual(hashlib.sha256(json.dumps(previous781,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()).hexdigest(), '89ecd1c660ee73220d12e14fbe7dd1e85c68b16b7929365445ab687b7044a810')
        previous757 = {k: v for k,v in translations.items() if int(k[3:]) < 3368}
        self.assertEqual(hashlib.sha256(json.dumps(previous757,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()).hexdigest(), 'd592c6eb153b2d4efe42213510fc6d16dfb3900b07f40e0f8a759272a80fe89b')
        previous733 = {k: v for k,v in translations.items() if int(k[3:]) < 3257}
        self.assertEqual(hashlib.sha256(json.dumps(previous733,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()).hexdigest(), '13d7c9b4931e7613f1c449823f963ac63028eb1e5bd37fa2a1dc0dd0714aa3c6')
        previous709 = {k: v for k,v in translations.items() if int(k[3:]) < 3169}
        self.assertEqual(hashlib.sha256(json.dumps(previous709,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()).hexdigest(), 'b4c8f715f5f1727a80400c0f244e2c99ca5f7b340298075ffb16ca998257f0fb')
        baseline = {k: v for k, v in translations.items() if int(k[3:]) < 3067}
        normalized = json.dumps(baseline,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        self.assertEqual(hashlib.sha256(normalized).hexdigest(), '8e19ff0738aa3243430e007e4967a244bc4cd4f11af06a532f831c81e1be346c')
        previous = {k: v for k, v in translations.items() if int(k[3:]) <= 2182}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Complete first-492 baseline before adding cards 493–516.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         '122bd19ecf6ef21f4a9b59b9716f5dba314decf5f42dc7e74b29bbc71794fdcb')
        previous = {k: v for k, v in translations.items() if int(k[3:]) <= 2069}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Complete first-468 baseline before adding cards 469–492.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         'ceb05c543ccf89dffabf0902460c476c62ef4eb547315cfc821c6e4930fba241')
        previous = {k: v for k, v in translations.items() if int(k[3:]) <= 1970}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Complete first-444 baseline before adding cards 445–468.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         '2d213566a74a7074dedd9777faebb6b18aaf376d2a87a59bc11c3c9f3d33ec89')
        previous = {k: v for k, v in translations.items() if int(k[3:]) <= 1856}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Complete first-420 baseline before adding cards 421–444.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         '1ebb93a10bd8d6a3be973472fe6a0c953453e9a4a6baec832047b87496552d25')
        previous = {k: v for k, v in translations.items() if int(k[3:]) <= 1724}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        # Complete first-396 baseline before adding cards 397–420.
        self.assertEqual(hashlib.sha256(normalized).hexdigest(),
                         'cf128f82822e8ea47e3fa87fd526527cffdc7c104287cb4ad67029a049d2b829')
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

        # Preserve all translations prepared through card 516.
        previous = {k:v for k,v in translations.items() if int(k[3:]) < 2282}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        self.assertEqual(hashlib.sha256(normalized).hexdigest(), 'b13590af55ffd78f66edb52df71b0d7de97aba92e5fb813a8dfe745750b04bea')

        # Preserve the entire approved baseline through card 540.
        previous = {k:v for k,v in translations.items() if int(k[3:]) < 2381}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        self.assertEqual(hashlib.sha256(normalized).hexdigest(), 'e430ac2b1a2a4843cc94001af9deb69ea03728b03f35da65b25e341c4123e33c')

        previous = {k:v for k,v in translations.items() if int(k[3:]) < 2626}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        self.assertEqual(hashlib.sha256(normalized).hexdigest(), 'f3e49d3e52fef6e470e0c8807bf65e330bdcb389357c0c100230b756310aed91')

        previous = {k:v for k,v in translations.items() if int(k[3:]) < 2758}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        self.assertEqual(hashlib.sha256(normalized).hexdigest(), '79ae272a8896789b264e0f2948a378c703551ac0bd2dc18b668c165a10d0aa72')

        previous = {k:v for k,v in translations.items() if int(k[3:]) < 2874}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        self.assertEqual(hashlib.sha256(normalized).hexdigest(), '34dbc17c6b46cc408a9e7fb88898434be07021e4d4b580b273f372045d67f1f8')

        previous = {k:v for k,v in translations.items() if int(k[3:]) < 2968}
        normalized = json.dumps(previous,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()
        self.assertEqual(hashlib.sha256(normalized).hexdigest(), 'f95d9f0d0c447c87d35d3f573be155b04f66c9f68e8380e9c786007b6c152795')

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
