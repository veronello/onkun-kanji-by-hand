(() => {
  const root = document.getElementById('on-drill');
  if (!root) return;
  const $ = id => root.querySelector(`#od-${id}`);
  const copy = {
    ru: {
      title:'Онные чтения', subtitle:range => `Примеры из карточек № ${range[0]}–${range[1]}`,
      word:'Слово', of:'из', instruction:'Напиши на бумаге', compare:'Сравни со своей записью',
      show:'Показать ответ', next:'Следующее слово →', finish:'Завершить', back:'← Предыдущее слово',
      done:'Повторение завершено', doneText:n => `Все ${n} примеров пройдены.`,
      again:'Повторить ещё раз', progress:'Текущее слово', loading:'Загрузка…',
      error:'Не удалось загрузить упражнения. Попробуй ещё раз.', retry:'Повторить'
    },
    en: {
      title:'ON readings', subtitle:range => `Examples from cards No. ${range[0]}–${range[1]}`,
      word:'Word', of:'of', instruction:'Write it on paper', compare:'Compare with your handwriting',
      show:'Show answer', next:'Next word →', finish:'Finish', back:'← Previous word',
      done:'Review complete', doneText:n => `You have reviewed all ${n} examples.`,
      again:'Review again', progress:'Current word', loading:'Loading…',
      error:'Could not load the exercises. Please try again.', retry:'Retry'
    }
  };
  let language = document.documentElement.lang === 'ru' ? 'ru' : 'en';
  let words = [], range, index = 0, revealed = false, finished = false, state = 'loading';

  async function fetchJson(url) {
    const response = await fetch(url, {cache:'no-cache'});
    if (!response.ok) throw new Error(`${response.status}: ${url}`);
    return response.json();
  }

  async function load() {
    state = 'loading';
    render();
    try {
      const [selection, manifest] = await Promise.all([
        fetchJson('data/on-drill-selection.json'), fetchJson('data/excel/manifest.json')
      ]);
      const [first, last] = selection.cardRange;
      if (selection.schemaVersion !== 1 || !Number.isInteger(first) || !Number.isInteger(last) ||
          first < 1 || last < first || last > manifest.stats.kanji ||
          !selection.exampleIds.length || new Set(selection.exampleIds).size !== selection.exampleIds.length) {
        throw new Error('Invalid ON selection');
      }
      const start = Math.floor((first - 1) / manifest.chunkSize);
      const end = Math.floor((last - 1) / manifest.chunkSize);
      const chunks = await Promise.all(manifest.chunks.slice(start, end + 1)
        .map(path => fetchJson(`data/excel/${path}?v=${manifest.sha256}`)));
      const byId = new Map();
      for (const card of chunks.flat()) {
        if (card.id < first || card.id > last) continue;
        for (const word of card.words) {
          const id = word[6].id;
          if (byId.has(id)) throw new Error(`Duplicate example ID: ${id}`);
          byId.set(id, {word, cardId:card.id});
        }
      }
      // Only individually reviewed IDs enter the drill. Texts stay in the shared card data.
      const seen = new Set();
      const selected = selection.exampleIds.map(id => {
        const entry = byId.get(id), w = entry?.word, meta = w?.[6];
        if (!w || meta.type !== 'ON' || !meta.eligible ||
            !w.slice(0, 4).every(value => typeof value === 'string' && value.trim()) ||
            /[○…]/u.test(w[0]) || /^\p{Script=Han}$/u.test(w[0])) throw new Error(`Unavailable ON example: ${id}`);
        seen.add(JSON.stringify(w.slice(0, 2)));
        return entry;
      });
      // A different reading of the same spelling is a distinct task.
      if (seen.size !== selected.length) throw new Error('Duplicate ON task');
      range = [Math.min(...selected.map(e => e.cardId)), Math.max(...selected.map(e => e.cardId))];
      words = selected.map(e => e.word);
      index = 0; revealed = false; finished = false; state = 'ready';
    } catch (error) {
      state = 'error';
      console.error('ON exercises:', error);
    }
    render();
  }

  function render() {
    const t = copy[language];
    root.lang = language;
    root.setAttribute('aria-busy', String(state === 'loading'));
    $('title').textContent = t.title;
    $('subtitle').textContent = range ? t.subtitle(range) : '';
    $('status').hidden = state === 'ready';
    $('status').textContent = state === 'error' ? t.error : state === 'loading' ? t.loading : '';
    $('retry').hidden = state !== 'error';
    $('retry').textContent = t.retry;
    $('exercise').hidden = state !== 'ready';
    $('action').disabled = state !== 'ready';
    if (state !== 'ready') return;

    const w = words[index];
    root.dataset.exampleId = w[6].id;
    $('counter').textContent = finished ? t.done : `${t.word} ${index + 1} ${t.of} ${words.length}`;
    $('progress').max = words.length;
    $('progress').value = index + 1;
    $('progress').setAttribute('aria-label', t.progress);
    $('question').hidden = finished;
    $('finished').hidden = !finished;
    $('instruction').textContent = t.instruction;
    $('reading').textContent = w[1];
    $('meaning').textContent = w[language === 'ru' ? 2 : 3];
    $('answer').hidden = !revealed;
    $('answer-label').textContent = t.compare;
    $('kanji').textContent = revealed ? w[0] : '';
    // Editorial/audit notes are not exercise content. Do not copy them from card rows.
    $('note').textContent = '';
    $('note').hidden = true;
    $('action').textContent = finished ? t.again : !revealed ? t.show : index === words.length - 1 ? t.finish : t.next;
    $('action').setAttribute('aria-expanded', String(revealed && !finished));
    $('back').textContent = t.back;
    $('back').disabled = index === 0;
    $('back').hidden = finished;
    $('finish-title').textContent = t.done;
    $('finish-text').textContent = t.doneText(words.length);
    $('live').textContent = finished ? t.done : revealed ? w[0] : `${t.word} ${index + 1}: ${w[1]}`;
  }

  $('action').addEventListener('click', () => {
    if (state !== 'ready') return;
    if (finished) { index = 0; finished = false; revealed = false; }
    else if (!revealed) revealed = true;
    else if (index === words.length - 1) finished = true;
    else { index++; revealed = false; }
    render();
  });
  $('back').addEventListener('click', () => {
    if (state === 'ready' && index > 0) { index--; revealed = false; render(); }
  });
  $('retry').addEventListener('click', load);
  document.addEventListener('onkun-language-change', event => {
    if (event.detail === 'ru' || event.detail === 'en') { language = event.detail; render(); }
  });
  load();
})();
