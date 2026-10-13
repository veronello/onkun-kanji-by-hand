/* Run a local HTTP server first; then: node scripts/test_cards.cjs */
const assert = require('node:assert/strict');
const {chromium} = require('playwright');
const base = process.env.CARDS_BASE_URL || 'http://127.0.0.1:8765';
(async () => {
  const browser = await chromium.launch({headless:true, executablePath:process.env.CHROMIUM_EXECUTABLE_PATH || undefined, args:['--no-sandbox']});
  const results = [];
  try {
    for (const size of [{width:1440,height:1000},{width:390,height:844},{width:320,height:740}]) {
      const page = await browser.newPage({viewport:size});
      const errors = [], requests = [];
      page.on('pageerror', e => errors.push(e.message));
      page.on('request', r => { if(r.url().includes('/data/excel/')) requests.push(r.url()); });
      await page.goto(`${base}/cards.html`);
      const ready = () => page.waitForFunction(() => document.querySelector('#kc-content').getAttribute('aria-busy') === 'false' && document.querySelector('.kc-sheet'));
      await ready();
      assert.equal(await page.locator('.kc-sheet').count(),size.width>=1000 ? 12 : 1);
      assert(requests.length === 2, 'Initial load must only fetch manifest and first chunk');
      assert(!requests.some(u => /source-records|romaji-audit|romaji-review/.test(u)), 'Audit files must not load into UI');
      await page.locator('[data-view="grid"]').click(); await ready();
      assert.equal(await page.locator('.kc-sheet').count(),12);
      assert.equal(await page.locator('.kc-word').count(),46);
      await page.locator('.language-button[data-language="ru"]').click(); await ready();
      assert.match(await page.locator('[data-example-id="EX-00001"]').innerText(), /последователь; подражатель/);
      assert.equal(await page.locator('[data-example-id="EX-00008"] .kc-word-reading').innerText(),'aware na hanashi');
      await page.locator('.language-button[data-language="en"]').click(); await ready();
      assert.match(await page.locator('[data-example-id="EX-00001"]').innerText(),/follower; imitator/);
      await page.locator('#kc-next').click(); await ready();
      assert.match(await page.locator('#kc-range').innerText(),/13–24/);
      await page.locator('[data-open="12"]').click(); await ready();
      assert.equal(await page.locator('.kc-sheet').count(),1);
      assert.match(await page.locator('.kc-meta').innerText(),/13/);
      await page.locator('#kc-search').fill('2136'); await page.locator('#kc-go').click(); await ready();
      assert.match(await page.locator('.kc-meta').innerText(),/2136/);
      assert(await page.locator('#kc-next').isDisabled());
      await page.locator('#kc-search').fill('朕'); await page.locator('#kc-go').click(); await ready();
      assert.match(await page.locator('.kc-sheet').innerText(),/No examples/);
      await page.locator('#kc-search').fill('岳'); await page.locator('#kc-go').click(); await ready();
      const template = page.locator('[data-example-id="EX-00998"]');
      assert.match(await template.innerText(),/Reference template/);
      assert.equal(await template.locator('.kc-word-reading').count(),0);
      await page.locator('#kc-search').fill('519'); await page.locator('#kc-go').click(); await ready();
      const pending = page.locator('[data-example-id="EX-02297"]');
      assert.match(await pending.innerText(),/Reading needs review/);
      assert(!((await pending.innerText()).includes('ikkodachi')));
      await page.locator('#kc-search').fill('767'); await page.locator('#kc-go').click(); await ready();
      assert.match(await page.locator('[data-example-id="EX-03421"]').innerText(),/manual discussion/);
      await page.locator('[data-scope="12"]').click(); await ready();
      await page.locator('[data-view="grid"]').click(); await ready();
      assert(await page.locator('#kc-next').isDisabled());
      await page.locator('#kc-search').fill('2136'); await page.locator('#kc-go').click();
      assert.match(await page.locator('#kc-search-message').innerText(),/outside the first 12/);
      await page.locator('#kc-search').fill('9999'); await page.locator('#kc-go').click();
      assert.match(await page.locator('#kc-search-message').innerText(),/not found/);
      // Rapid state changes while data loads must end in the selected state.
      await page.evaluate(() => { document.querySelector('[data-view="single"]').click(); document.querySelector('[data-view="grid"]').click(); });
      await ready(); assert.equal(await page.locator('.kc-sheet').count(),12);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),false,'Horizontal overflow');
      await page.screenshot({path:`/tmp/kanji-cards-${size.width}.png`,fullPage:true});
      assert.deepEqual(errors,[]);
      results.push({viewport:size,initialDatabaseRequests:2,checks:'passed'});
      await page.close();
    }
    const page = await browser.newPage();
    await page.route('**/data/excel/cards/**',route=>route.abort());
    await page.goto(`${base}/cards.html`);
    await page.locator('#kc-error').waitFor({state:'visible'});
    assert.equal(await page.locator('.kc-sheet').count(),0, 'No fallback to old unverified readings');
    await page.unroute('**/data/excel/cards/**');
    await page.locator('#kc-retry').click();
    await page.waitForFunction(()=>document.querySelector('.kc-sheet') && document.querySelector('#kc-content').getAttribute('aria-busy')==='false');
    results.push({errorRecovery:'passed'});
    await page.goto(`${base}/cards.html?excel-preview`);
    await page.waitForFunction(()=>document.querySelector('#kc-range').textContent.includes('/ 12'));
    results.push({legacyPreviewUrl:'passed'});
    await page.close();
    console.log(JSON.stringify(results,null,2));
  } finally { await browser.close(); }
})().catch(e=>{console.error(e);process.exitCode=1;});
