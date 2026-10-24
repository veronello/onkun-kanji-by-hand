/* Serve the repository on CARDS_BASE_URL (default http://127.0.0.1:8765).
   Run: node scripts/test_on_drill.cjs. Requires Playwright + Chromium.
   Optional screenshots: ON_SCREENSHOT_DIR=/tmp/on-screenshots. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {chromium} = require('playwright');
const root = path.resolve(__dirname, '..');
const read = p => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
const selection = read('data/on-drill-selection.json');
const visibility = read('data/drill-visibility.json');
const visibleIds = selection.exampleIds.filter(id => !visibility.hiddenExampleIds.includes(id));
const manifest = read('data/excel/manifest.json');
const cards = manifest.chunks.flatMap(p => read(`data/excel/${p}`));
const byId = new Map(cards.flatMap(c => c.words).map(w => [w[6].id, w]));
const cardById = new Map(cards.flatMap(c => c.words.map(w => [w[6].id,c.id])));
const expected = visibleIds.map(id => byId.get(id));
assert.equal(selection.exampleIds.length,770);
assert.equal(expected.length,769);
assert.deepEqual(selection.exampleIds.filter(id => visibility.hiddenExampleIds.includes(id)),['EX-00164']);
const expectedRange = `${Math.min(...visibleIds.map(id => cardById.get(id)))}–${Math.max(...visibleIds.map(id => cardById.get(id)))}`;
const firstChunk = Math.floor((selection.cardRange[0] - 1) / manifest.chunkSize);
const lastChunk = Math.floor((selection.cardRange[1] - 1) / manifest.chunkSize);
const base = process.env.CARDS_BASE_URL || 'http://127.0.0.1:8765';
const screenshots = process.env.ON_SCREENSHOT_DIR;
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
      await page.goto(`${base}/on.html`); await ready(page);
      assert.equal(requests.filter(u => /\/cards\/\d+\.json/.test(u)).length, lastChunk-firstChunk+1);
      assert(requests.some(u => u.endsWith('/data/drill-visibility.json')));
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
          check($('subtitle').textContent.includes(expectedRange), 'Actual visible card range');
          return {lang, tasks:expected.length, checks:'passed'};
        }, {expected, lang, expectedRange});
        if (screenshots) {
          await page.screenshot({path:path.join(screenshots, `on-${size.width}-${lang}-question.png`), fullPage:true});
          await page.locator('#od-action').click();
          await page.screenshot({path:path.join(screenshots, `on-${size.width}-${lang}-answer.png`), fullPage:true});
          await page.reload(); await ready(page);
        }
        results.push({width:size.width,...result});
      }
      await page.locator('#theme-toggle').click();
      assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      if (screenshots) await page.screenshot({path:path.join(screenshots, `on-${size.width}-dark.png`), fullPage:true});
      assert.deepEqual(errors, []);
      await page.close();
    }

    // Failed load, language during loading/error, retry, and a missing approved ID.
    for (const fault of ['http','missing-id','missing-translation','duplicate-task','wrong-type','single-kanji',
                         'visibility-http','invalid-visibility','duplicate-hidden-id','all-hidden']) {
      const page = await browser.newPage();
      const visibilityFault = /visibility|hidden/.test(fault);
      const route = visibilityFault ? '**/data/drill-visibility.json' :
        fault === 'http' ? '**/data/excel/cards/001.json*' : '**/data/on-drill-selection.json';
      if (fault === 'missing-translation') {
        await page.route('**/data/excel/cards/000.json*', async r => {
          const data = read('data/excel/cards/000.json');
          data.find(c => c.id === 1).words.find(w => w[6].id === 'EX-00001')[2] = '';
          await r.fulfill({json:data});
        });
      } else {
        await page.route(route, r => {
          if (fault === 'http' || fault === 'visibility-http') return r.fulfill({status:503,body:'unavailable'});
          if (visibilityFault) {
            const data = structuredClone(visibility);
            if (fault === 'invalid-visibility') data.hiddenExampleIds = ['bad-id'];
            if (fault === 'duplicate-hidden-id') data.hiddenExampleIds.push(data.hiddenExampleIds[0]);
            if (fault === 'all-hidden') data.hiddenExampleIds = selection.exampleIds;
            return r.fulfill({json:data});
          }
          const data = structuredClone(selection);
          if (fault === 'missing-id') data.exampleIds[0] = 'EX-99999';
          if (fault === 'duplicate-task') data.exampleIds.push('EX-00414');
          if (fault === 'wrong-type') data.exampleIds[0] = 'EX-00007';
          if (fault === 'single-kanji') data.exampleIds.push('EX-00720');
          return r.fulfill({json:data});
        });
      }
      await page.goto(`${base}/on.html`);
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
    await delayed.route('**/data/on-drill-selection.json', async route => {await gate; await route.fulfill({json:selection});});
    await delayed.goto(`${base}/on.html`);
    await delayed.locator('.language-button[data-language="ru"]').click();
    assert.equal(await delayed.locator('#od-status').innerText(), 'Загрузка…');
    assert.equal(await delayed.locator('#od-action').isEnabled(), false);
    release(); await ready(delayed);
    assert.equal(await delayed.locator('#od-meaning').innerText(), expected[0][2]);
    await delayed.close();
    // Restore only the ON flag; all KUN flags and source texts remain untouched.
    const restored = await browser.newPage();
    await restored.route('**/data/drill-visibility.json', r => r.fulfill({json:{...visibility,
      hiddenExampleIds:visibility.hiddenExampleIds.filter(id => id !== 'EX-00164')}}));
    await restored.goto(`${base}/on.html`); await ready(restored);
    assert.equal(await restored.locator('#od-progress').getAttribute('max'),'770');
    await restored.evaluate(position => {
      for (let n=0;n<position;n++) {
        document.getElementById('od-action').click(); document.getElementById('od-action').click();
      }
    },selection.exampleIds.indexOf('EX-00164'));
    assert.equal(await restored.locator('#on-drill').getAttribute('data-example-id'),'EX-00164');
    assert.equal(await restored.locator('#od-reading').innerText(),byId.get('EX-00164')[1]);
    await restored.locator('#od-action').click();
    assert.equal(await restored.locator('#od-kanji').innerText(),byId.get('EX-00164')[0]);
    await restored.close();
    // The subtitle must follow visible cards rather than the approved selection range.
    const bounded = await browser.newPage();
    const boundedHidden = [...new Set([...visibility.hiddenExampleIds,
      ...selection.exampleIds.filter(id => [1,300].includes(cardById.get(id)))])];
    const boundedVisible = selection.exampleIds.filter(id => !boundedHidden.includes(id));
    await bounded.route('**/data/drill-visibility.json', r =>
      r.fulfill({json:{...visibility,hiddenExampleIds:boundedHidden}}));
    await bounded.goto(`${base}/on.html`); await ready(bounded);
    assert((await bounded.locator('#od-subtitle').innerText()).includes('2–299'));
    assert.equal(await bounded.locator('#od-progress').getAttribute('max'),String(boundedVisible.length));
    await bounded.close();
    // An exercise flag must not hide the same record from reference cards.
    const reference = await browser.newPage();
    await reference.goto(`${base}/cards.html`);
    await reference.locator('.kc-sheet').first().waitFor();
    await reference.locator('[data-view="single"]').click();
    await reference.locator('#kc-search').fill('41');
    await reference.locator('#kc-go').click();
    const retained = reference.locator('.kc-word[data-example-id="EX-00164"]');
    await retained.waitFor({state:'visible'});
    for (const lang of ['ru','en']) {
      await reference.locator(`.language-button[data-language="${lang}"]`).click();
      assert((await retained.innerText()).includes('一座'));
      assert((await retained.innerText()).includes(byId.get('EX-00164')[1]));
    }
    await reference.close();
    console.log(JSON.stringify({results, loadFailuresAndRetry:'passed', delayedLanguageSwitch:'passed',
      restoreHiddenTask:'passed',visibleRangeAndCount:'passed',hiddenTaskRetainedInCards:'passed'}, null, 2));
  } finally {await browser.close();}
})().catch(error => {console.error(error); process.exitCode = 1;});
