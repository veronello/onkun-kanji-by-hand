/* Serve the repository on CARDS_BASE_URL (default http://127.0.0.1:8765).
   Run: node scripts/test_kun_drill.cjs. Requires Playwright + Chromium.
   Optional screenshots: KUN_SCREENSHOT_DIR=/tmp/kun-screenshots. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {chromium} = require('playwright');
const root = path.resolve(__dirname, '..');
const read = p => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
const selection = read('data/kun-drill-selection.json');
const visibility = read('data/drill-visibility.json');
const visibleIds = selection.exampleIds.filter(id => !visibility.hiddenExampleIds.includes(id));
const manifest = read('data/excel/manifest.json');
const byId = new Map(manifest.chunks.flatMap(p => read(`data/excel/${p}`))
  .flatMap(c => c.words).map(w => [w[6].id, w]));
const expected = visibleIds.map(id => byId.get(id));
assert.equal(selection.exampleIds.length, 470);
assert.equal(expected.length, 451);
assert.equal(selection.exampleIds.length - expected.length, 19);
const firstChunk = Math.floor((selection.cardRange[0] - 1) / manifest.chunkSize);
const lastChunk = Math.floor((selection.cardRange[1] - 1) / manifest.chunkSize);
const selectedCardIds = manifest.chunks.flatMap(p => read(`data/excel/${p}`))
  .filter(c => c.words.some(w => visibleIds.includes(w[6].id))).map(c => c.id);
const expectedRange = `${Math.min(...selectedCardIds)}–${Math.max(...selectedCardIds)}`;
const base = process.env.CARDS_BASE_URL || 'http://127.0.0.1:8765';
const screenshots = process.env.KUN_SCREENSHOT_DIR;
if (screenshots) fs.mkdirSync(screenshots, {recursive:true});

(async () => {
  const browser = await chromium.launch({headless:true,
    executablePath:process.env.CHROMIUM_EXECUTABLE_PATH || undefined, args:['--no-sandbox']});
  const results = [];
  const ready = page => page.waitForFunction(() =>
    document.querySelector('#on-drill')?.getAttribute('aria-busy') === 'false' &&
    document.querySelector('#od-exercise')?.hidden === false);
  try {
    for (const size of [{width:1440,height:1000},{width:390,height:844},{width:320,height:740}]) {
      const page = await browser.newPage({viewport:size, isMobile:size.width < 1000, hasTouch:size.width < 1000});
      const errors = [], requests = [];
      page.on('pageerror', e => errors.push(e.message));
      page.on('request', r => {if (r.url().includes('/data/')) requests.push(r.url());});
      await page.goto(`${base}/kun.html`); await ready(page);
      assert.equal(requests.filter(u => /\/cards\/\d+\.json/.test(u)).length, lastChunk - firstChunk + 1);
      assert(!requests.some(u => /source-records|romaji-audit|romaji-review/.test(u)));
      for (const lang of ['ru', 'en']) {
        await page.locator(`.language-button[data-language="${lang}"]`).click();
        // Exercise every task with the actual rendered DOM and event listeners.
        const result = await page.evaluate(({expected, lang, expectedRange}) => {
          const $ = id => document.getElementById(`od-${id}`);
          const app = document.getElementById('on-drill');
          const check = (ok, why) => {if (!ok) throw new Error(why);};
          const overflow = () => {
            check(document.documentElement.scrollWidth <= innerWidth, 'Page overflow');
            for (const id of ['reading','meaning','kanji','action','back']) {
              const e = $(id), r = e.getBoundingClientRect();
              if (!r.width) continue;
              check(r.left >= -1 && r.right <= innerWidth + 1, `${id} outside viewport`);
              check(e.scrollWidth <= e.clientWidth + 1, `${id} clipped text`);
            }
          };
          for (let n = 0; n < expected.length; n++) {
            const w = expected[n], id = w[6].id;
            check(app.dataset.exampleId === id, `${id}: order`);
            check($('reading').textContent === w[1], `${id}: reading`);
            check($('meaning').textContent === w[lang === 'ru' ? 2 : 3], `${id}: ${lang}`);
            check($('kanji').textContent === '' && $('answer').hidden, `${id}: answer leaks`);
            check($('progress').max === expected.length && $('progress').value === n + 1, `${id}: progress`);
            check($('counter').textContent === (lang === 'ru' ? `Слово ${n+1} из ${expected.length}` : `Word ${n+1} of ${expected.length}`), `${id}: counter`);
            check($('back').disabled === (n === 0), `${id}: back boundary`);
            check(!/Sense selection needs context|столбц|Excel/.test(app.innerText), `${id}: service notes`);
            overflow();
            $('action').click();
            check(!$('answer').hidden && $('kanji').textContent === w[0], `${id}: full answer`);
            check($('action').getAttribute('aria-expanded') === 'true', `${id}: accessibility`);
            check($('note').textContent === '', `${id}: audit note`);
            overflow();
            if (n === 0) {
              // Language switches preserve the revealed answer and current position.
              document.querySelector(`.language-button[data-language="${lang === 'ru' ? 'en' : 'ru'}"]`).click();
              check(!$('answer').hidden && app.dataset.exampleId === id, 'Switch resets answer');
              document.querySelector(`.language-button[data-language="${lang}"]`).click();
            }
            if (n === 1) {
              $('back').click();
              check(app.dataset.exampleId === expected[0][6].id && $('answer').hidden, 'Back must hide answer');
              $('action').click(); $('action').click(); $('action').click();
              check(app.dataset.exampleId === id && !$('answer').hidden, 'Return to current word');
            }
            $('action').click();
          }
          check(!$('finished').hidden && $('question').hidden && $('back').hidden, 'Completion');
          check($('progress').value === expected.length, 'Final progress');
          check($('finish-text').textContent === (lang === 'ru' ? `Все ${expected.length} примеров пройдены.` : `You have reviewed all ${expected.length} examples.`), 'Completion count');
          $('action').click();
          check(app.dataset.exampleId === expected[0][6].id && $('answer').hidden && !$('question').hidden, 'Restart');
          check($('subtitle').textContent.includes(expectedRange), 'Actual card range');
          return {lang, tasks:expected.length, checks:'passed'};
        }, {expected, lang, expectedRange});
        if (screenshots) {
          await page.screenshot({path:path.join(screenshots, `kun-${size.width}-${lang}-question.png`), fullPage:true});
          await page.locator('#od-action').click();
          await page.screenshot({path:path.join(screenshots, `kun-${size.width}-${lang}-answer.png`), fullPage:true});
          await page.reload(); await ready(page);
        }
        results.push({width:size.width,...result});
      }
      await page.locator('#theme-toggle').click();
      assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      if (screenshots) await page.screenshot({path:path.join(screenshots, `kun-${size.width}-dark.png`), fullPage:true});
      assert.deepEqual(errors, []);
      await page.close();
    }

    // Failed load, language during loading/error, retry, and a missing approved ID.
    for (const fault of ['http','visibility-http','invalid-visibility','duplicate-hidden-id',
                         'missing-id','missing-translation','duplicate-task']) {
      const page = await browser.newPage();
      const visibilityFault = /visibility|hidden-id/.test(fault);
      const route = visibilityFault ? '**/data/drill-visibility.json' :
        fault === 'http' ? '**/data/excel/cards/001.json*' : '**/data/kun-drill-selection.json';
      if (fault === 'missing-translation') {
        await page.route('**/data/excel/cards/000.json*', async r => {
          const data = read('data/excel/cards/000.json');
          data.find(c => c.id === 2).words.find(w => w[6].id === 'EX-00007')[2] = '';
          await r.fulfill({json:data});
        });
      } else {
        await page.route(route, r => {
          if (fault === 'http' || fault === 'visibility-http') return r.fulfill({status:503,body:'unavailable'});
          if (visibilityFault) {
            const data = structuredClone(visibility);
            if (fault === 'invalid-visibility') data.hiddenExampleIds = ['bad-id'];
            if (fault === 'duplicate-hidden-id') data.hiddenExampleIds.push(data.hiddenExampleIds[0]);
            return r.fulfill({json:data});
          }
          const data = structuredClone(selection);
          if (fault === 'missing-id') data.exampleIds[0] = 'EX-99999';
          if (fault === 'duplicate-task') data.exampleIds.push('EX-00274');
          return r.fulfill({json:data});
        });
      }
      await page.goto(`${base}/kun.html`);
      await page.locator('#od-retry').waitFor({state:'visible'});
      for (const lang of ['ru','en']) {
        await page.locator(`.language-button[data-language="${lang}"]`).click();
        assert.match(await page.locator('#od-status').innerText(), lang === 'ru' ? /Не удалось/ : /Could not load/);
      }
      assert.equal(await page.locator('#od-action').isVisible(), false);
      await page.unrouteAll();
      await page.locator('#od-retry').click(); await ready(page);
      assert.equal(await page.locator('#on-drill').getAttribute('data-example-id'), expected[0][6].id);
      await page.close();
    }
    const delayed = await browser.newPage();
    let release;
    const gate = new Promise(resolve => {release = resolve;});
    await delayed.route('**/data/kun-drill-selection.json', async route => {await gate; await route.fulfill({json:selection});});
    await delayed.goto(`${base}/kun.html`);
    await delayed.locator('.language-button[data-language="ru"]').click();
    assert.equal(await delayed.locator('#od-status').innerText(), 'Загрузка…');
    assert.equal(await delayed.locator('#od-action').isEnabled(), false);
    release(); await ready(delayed);
    assert.equal(await delayed.locator('#od-meaning').innerText(), expected[0][2]);
    await delayed.close();
    // Removing flags restores reviewed tasks in their original positions, without editing texts.
    const restored = await browser.newPage();
    await restored.route('**/data/drill-visibility.json', r =>
      r.fulfill({json:{...visibility, hiddenExampleIds:[]}}));
    await restored.goto(`${base}/kun.html`); await ready(restored);
    assert.equal(await restored.locator('#od-progress').getAttribute('max'), '470');
    await restored.locator('#od-action').click(); await restored.locator('#od-action').click();
    assert.equal(await restored.locator('#on-drill').getAttribute('data-example-id'), 'EX-00008');
    assert.equal(await restored.locator('#od-reading').innerText(), byId.get('EX-00008')[1]);
    await restored.close();
    console.log(JSON.stringify({results, loadFailuresAndRetry:'passed', delayedLanguageSwitch:'passed',
      restoreHiddenTask:'passed'}, null, 2));
  } finally {await browser.close();}
})().catch(error => {console.error(error); process.exitCode = 1;});
