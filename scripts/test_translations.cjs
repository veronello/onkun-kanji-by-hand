/* Serve the repository over HTTP, then run node scripts/test_translations.cjs. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {chromium} = require('playwright');
const root = path.resolve(__dirname, '..');
const first = Number(process.env.CARDS_TRANSLATION_START || 25);
const chunk = String(Math.floor((first - 1) / 48)).padStart(3, '0');
const offset = (first - 1) % 48;
const cards = JSON.parse(fs.readFileSync(path.join(root, `data/excel/cards/${chunk}.json`), 'utf8')).slice(offset, offset + 24);
assert.equal(cards.length, 24);
const totalExamples = cards.reduce((n, c) => n + c.words.length, 0);
const translations = JSON.parse(fs.readFileSync(path.join(root, 'data/translations-12.json'), 'utf8'));
const base = process.env.CARDS_BASE_URL || 'http://127.0.0.1:8765';

(async () => {
  const browser = await chromium.launch({headless:true, executablePath:process.env.CHROMIUM_EXECUTABLE_PATH || undefined, args:['--no-sandbox']});
  const results = [];
  try {
    for (const width of [1440, 390, 320]) {
      const page = await browser.newPage({viewport:{width, height:900}});
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      const ready = () => page.waitForFunction(() => document.querySelector('#kc-content')?.getAttribute('aria-busy') === 'false' && document.querySelector('.kc-sheet'));
      const language = async lang => { await page.locator(`.language-button[data-language="${lang}"]`).click(); await ready(); };
      const find = async id => { await page.locator('#kc-search').fill(String(id)); await page.locator('#kc-go').click(); await ready(); };
      const checkWords = async (expected, lang) => {
        assert.equal(await page.locator('.kc-word').count(), expected.length);
        // Read rendered text in one browser call so every record is checked, including collapsed-tail records.
        const actual = await page.locator('.kc-word').evaluateAll(elements => elements.map(e => ({
          id:e.dataset.exampleId,
          jp:e.querySelector('.kc-word-jp').firstChild.textContent,
          romaji:e.querySelector('.kc-word-reading')?.textContent,
          meaning:e.querySelector('.kc-word-meaning')?.textContent,
          review:e.querySelector('.kc-review')?.textContent || '',
          note:e.querySelector('.kc-word-note')?.textContent || ''
        })));
        assert.deepEqual(actual.map(w => w.id), expected.map(w => w[6].id), 'Example order');
        for (let n = 0; n < actual.length; n++) {
          const w = expected[n], t = translations[w[6].id], a = actual[n];
          assert.equal(a.jp, t.jp, `${a.id} Japanese`);
          assert.equal(a.romaji, t.romaji, `${a.id} workbook H`);
          assert.equal(a.meaning, t[lang], `${a.id} ${lang}`);
          assert.equal(a.review, '', `${a.id} editorial review label is hidden`);
          assert.equal(a.note, w[6].displayNotes?.[lang] ?? t[lang === 'ru' ? 'noteRu' : 'noteEn'], `${a.id} useful note`);
          assert.doesNotMatch(a.note, /\bH\b|workbook|исходн|столб/i, `${a.id} no source audit text`);
        }
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, 'Horizontal overflow');
      };
      await page.goto(`${base}/cards.html`); await ready();
      await page.locator('[data-view="grid"]').click(); await ready();
      await find(first);
      for (let offset = 0; offset < 24; offset += 12) {
        const batch = cards.slice(offset, offset + 12), expected = batch.flatMap(c => c.words);
        assert.equal(await page.locator('.kc-sheet').count(), 12);
        for (const card of batch) {
          const b = page.locator(`[data-toggle-examples="${card.id}"]`);
          if (await b.count() && await b.getAttribute('aria-expanded') === 'false') await b.click();
        }
        for (const lang of ['ru', 'en']) { await language(lang); await checkWords(expected, lang); }
        if (offset === 0) { await page.locator('#kc-next').click(); await ready(); }
      }
      await page.locator('[data-view="single"]').click(); await ready();
      for (const lang of ['ru', 'en']) {
        await language(lang);
        for (const card of cards) {
          await find(card.id);
          assert.equal(await page.locator('.kc-sheet').count(), 1);
          await checkWords(card.words, lang);
          assert.equal(await page.locator('[data-toggle-examples]').count(), 0, 'Single shows all examples');
        }
      }
      assert.deepEqual(errors, []);
      results.push({width, firstKanji:first, kanji:24, examples:totalExamples, languages:['ru','en'], views:['grid','single'], checks:'passed'});
      await page.close();
    }
    console.log(JSON.stringify(results, null, 2));
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
