(async () => {
  const root = document.getElementById('kanji-cards');
  if (!root) return;
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  })[char]);
  const copy = {
    ru: {title:'Карточки кандзи', single:'По одной', grid:'Сетка', prev:'← Назад', next:'Дальше →', open:'Открыть', more:'Показать ещё', less:'Свернуть', view:'Вид карточек', nav:'Листать карточки', card:'Карточка', search:'Иероглиф или номер', go:'Найти', page:'Карточки', loading:'Загрузка…', error:'Не удалось загрузить базу. Попробуй ещё раз.', retry:'Повторить', pending:'Чтение требует проверки', template:'Служебный шаблон — не упражнение', manual:'Чтение принято после ручного обсуждения', missing:'Перевод ещё не подготовлен', empty:'В базе нет примеров для этого иероглифа.', noMatch:'Иероглиф или номер не найден.'},
    en: {title:'Kanji cards', single:'One card', grid:'Grid', prev:'← Previous', next:'Next →', open:'Open', more:'Show more', less:'Show less', view:'Card view', nav:'Browse cards', card:'Card', search:'Kanji or number', go:'Find', page:'Cards', loading:'Loading…', error:'Could not load the database. Please try again.', retry:'Retry', pending:'Reading needs review', template:'Reference template — not an exercise', manual:'Reading accepted after manual discussion', missing:'Translation not prepared yet', empty:'No examples for this kanji in the database.', noMatch:'Kanji or number not found.'}
  };
  const PAGE_SIZE = 12;
  let language = document.documentElement.lang === 'ru' ? 'ru' : 'en';
  let view = window.matchMedia('(min-width: 1000px)').matches ? 'grid' : 'single';
  let index = 0, manifest, generation = 0;
  const cache = new Map();
  const expandedCards = new Set();
  let visibleCards = [];
  const content = root.querySelector('#kc-content');
  const previous = root.querySelector('#kc-prev');
  const next = root.querySelector('#kc-next');
  const search = root.querySelector('#kc-search');
  const status = root.querySelector('#kc-status');
  const error = root.querySelector('#kc-error');
  async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${response.status}: ${url}`);
    return response.json();
  }
  async function getChunk(n) {
    if (!cache.has(n)) {
      const promise = fetchJson(`data/excel/${manifest.chunks[n]}?v=${manifest.sha256}`);
      cache.set(n, promise);
      promise.catch(() => { if (cache.get(n) === promise) cache.delete(n); });
      // Bound the cache while retaining current requests.
      if (cache.size > 4) cache.delete(cache.keys().next().value);
    }
    return cache.get(n);
  }
  function cardMarkup(card, position) {
    const english = language === 'en', t = copy[language];
    const on = card.on.length ? `<div class="kc-reading-group"><div class="kc-reading-label">ON</div><div class="kc-reading" lang="ja">${card.on.map(escapeHtml).join(' · ')}</div></div>` : '';
    const kun = card.kun.length ? `<div class="kc-reading-group"><div class="kc-reading-label">KUN</div>${card.kun.map(r => `<div class="kc-reading" lang="ja">${escapeHtml(r[0])}</div>`).join('')}</div>` : '';
    const hasMore = view === 'grid' && card.words.length > 3;
    const expanded = hasMore && expandedCards.has(card.id);
    const shownWords = hasMore && !expanded ? card.words.slice(0, 3) : card.words;
    const rows = shownWords.map(w => {
      const meta = w[6], translated = w[english ? 3 : 2], note = meta.displayNotes?.[language] ?? w[english ? 5 : 4];
      const reference = String(w[0]).includes('○');
      const reading = meta.eligible && w[1] ? `<div class="kc-word-reading">${escapeHtml(w[1])}</div>` : `<div class="kc-note kc-review">${escapeHtml(reference ? t.template : t.pending)}</div>`;
      const meaning = translated ? `<div class="kc-word-meaning">${escapeHtml(translated)}</div>` : `<div class="kc-note">${escapeHtml(t.missing)}</div>`;
      const manual = meta.romajiStatus === 'ПРИНЯТО · ручная проверка' ? `<span class="kc-note">${escapeHtml(t.manual)}</span>` : '';
      return `<li class="kc-word" data-example-id="${escapeHtml(meta.id)}"><span class="kc-word-jp" lang="ja">${escapeHtml(w[0])}${meta.annotation ? `<span class="kc-note">${escapeHtml(meta.annotation)}</span>` : ''}</span><div class="kc-word-detail"><div>${reading}<span class="kc-note" lang="ja">${escapeHtml(meta.type)} · ${escapeHtml(meta.group)}</span>${manual}</div><div>${meaning}${note ? `<span class="kc-note kc-word-note">${escapeHtml(note)}</span>` : ''}</div></div></li>`;
    }).join('');
    return `<article class="kc-sheet" aria-label="${escapeHtml(t.card)} ${card.id}: ${escapeHtml(card.kanji)}">
      <div class="kc-meta"><span>${english ? 'No.' : '№'} ${card.id}</span>${view === 'grid' ? `<button type="button" class="kc-expand" data-open="${position}" aria-label="${escapeHtml(t.open)}: ${escapeHtml(card.kanji)}">${escapeHtml(t.open)}</button>` : ''}</div>
      <div class="kc-head"><h3 class="kc-kanji" lang="ja">${escapeHtml(card.kanji)}</h3><div>${on}${kun}</div></div>
      ${rows ? `<ul class="kc-words" id="kc-words-${card.id}">${rows}</ul>` : `<p class="kc-note">${escapeHtml(t.empty)}</p>`}
      ${hasMore ? `<button type="button" class="kc-show-more" data-toggle-examples="${card.id}" aria-expanded="${expanded}" aria-controls="kc-words-${card.id}">${escapeHtml(expanded ? t.less : `${t.more} (${card.words.length - 3})`)}</button>` : ''}
      ${card.notes ? `<details class="kc-source-note"><summary lang="ja">備考</summary><p lang="ja">${escapeHtml(card.notes)}</p></details>` : ''}
    </article>`;
  }
  function localize() {
    const t = copy[language]; root.lang = language;
    root.querySelector('#kc-title').textContent = t.title;
    root.querySelector('#kc-viewgroup').setAttribute('aria-label', t.view);
    root.querySelectorAll('[data-view]').forEach(b => {b.textContent = t[b.dataset.view]; b.setAttribute('aria-pressed', String(b.dataset.view === view));});
    root.querySelector('#kc-search-label').textContent = t.search;
    root.querySelector('#kc-go').textContent = t.go;
    root.querySelector('#kc-retry').textContent = t.retry;
    root.querySelector('#kc-pagination').setAttribute('aria-label', t.nav);
    previous.textContent = t.prev; next.textContent = t.next;
  }
  async function render() {
    const token = ++generation, t = copy[language];
    localize(); error.hidden = true; content.setAttribute('aria-busy', 'true');
    previous.disabled = true; next.disabled = true;
    content.classList.toggle('kc-grid', view === 'grid');
    content.innerHTML = `<p>${escapeHtml(t.loading)}</p>`;
    try {
      if (!manifest) manifest = await fetchJson('data/excel/manifest.json');
      if (token !== generation) return;
      const total = manifest.stats.kanji;
      index = Math.min(index, total - 1);
      const start = view === 'grid' ? Math.floor(index / PAGE_SIZE) * PAGE_SIZE : index;
      const end = Math.min(total, start + (view === 'grid' ? PAGE_SIZE : 1));
      const chunks = await Promise.all(Array.from(new Set(Array.from({length:end-start}, (_,i) => Math.floor((start+i)/manifest.chunkSize))), getChunk));
      if (token !== generation) return;
      const cards = chunks.flat().filter(c => c.id > start && c.id <= end);
      if (cards.length !== end-start) throw new Error('Incomplete card chunk');
      visibleCards = cards;
      content.innerHTML = cards.map((c,i) => cardMarkup(c, start+i)).join('');
      content.setAttribute('aria-busy', 'false');
      previous.disabled = start === 0; next.disabled = end === total;
      status.textContent = `${t.page} ${start+1}–${end} / ${total}`;
    } catch (err) {
      if (token !== generation) return;
      content.innerHTML = ''; content.setAttribute('aria-busy', 'false');
      error.hidden = false; root.querySelector('#kc-error-text').textContent = t.error;
      status.textContent = t.error;
      console.error('Kanji database:', err);
    }
  }
  root.addEventListener('click', event => {
    const b = event.target.closest('button');
    if (!b || !root.contains(b)) return;
    if (b.hasAttribute('data-toggle-examples')) {
      const id = Number(b.dataset.toggleExamples);
      const card = visibleCards.find(c => c.id === id);
      if (!card || view !== 'grid' || card.words.length <= 3) return;
      if (expandedCards.has(id)) expandedCards.delete(id); else expandedCards.add(id);
      b.closest('.kc-sheet').outerHTML = cardMarkup(card, id - 1);
      content.querySelector(`[data-toggle-examples="${id}"]`).focus({preventScroll:true});
    }
    else if (b.dataset.view) {view = b.dataset.view; render();}
    else if (b.hasAttribute('data-open')) {index = Number(b.dataset.open); view = 'single'; render(); root.querySelector('[data-view="single"]').focus({preventScroll:true}); root.scrollIntoView({block:'start', behavior:'instant'});}
    else if (b.id === 'kc-prev' && !b.disabled) {index = view === 'grid' ? Math.max(0, Math.floor(index/PAGE_SIZE)*PAGE_SIZE-PAGE_SIZE) : index-1; render();}
    else if (b.id === 'kc-next' && !b.disabled) {index = view === 'grid' ? Math.floor(index/PAGE_SIZE)*PAGE_SIZE+PAGE_SIZE : index+1; render();}
    else if (b.id === 'kc-retry') render();
  });
  root.querySelector('#kc-search-form').addEventListener('submit', event => {
    event.preventDefault();
    if (!manifest) return;
    const q = search.value.trim(), t = copy[language];
    const card = manifest.index.find(c => c.kanji === q || (/^\d+$/.test(q) && c.id === Number(q)));
    if (!card) {status.textContent = t.noMatch; root.querySelector('#kc-search-message').textContent = t.noMatch; return;}
    root.querySelector('#kc-search-message').textContent = ''; index = card.id-1; render();
  });
  document.addEventListener('onkun-language-change', event => {if (copy[event.detail]) {language = event.detail; root.querySelector('#kc-search-message').textContent = ''; render();}});
  await render();
})();
