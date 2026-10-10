
(() => {
  const root = document.getElementById('kanji-cards');
  const data = [
    { id: 1, kanji: '亜', on: ['a'], kun: [], meaning: ['вторичный; суб-; Азия', 'secondary; sub-; Asia'], words: [
      ['亜鉛', 'aen', 'цинк', 'zinc'],
      ['亜麻', 'ama', 'лён', 'flax'],
      ['亜流', 'aryū', 'последователь; подражатель; подражание', 'follower; imitator; imitation'],
      ['亜熱帯', 'anettai', 'субтропики', 'subtropics'],
      ['亜寒帯', 'akantai', 'субарктический пояс', 'subarctic zone'],
      ['亜米利加', 'amerika', 'Америка; США', 'America; the United States', 'старое написание, атэдзи', 'historical spelling, ateji'],
      ['露西亜', 'roshia', 'Россия', 'Russia', 'традиционное написание, атэдзи', 'traditional spelling, ateji'],
      ['東亜', 'tōa', 'Восточная Азия', 'East Asia']
    ]},
    { id: 2, kanji: '哀', on: ['ai'], kun: [['aware', 'печаль; жалость', 'sorrow; pity'], ['awaremu', 'жалеть; сострадать', 'to pity; to feel compassion']], meaning: ['печаль; сострадание', 'sorrow; compassion'], words: [
      ['哀愁', 'aishū', 'грусть; меланхолия', 'sadness; melancholy'],
      ['哀話', 'aiwa', 'печальная история', 'a sad story'],
      ['哀憐', 'airen', 'жалость; сострадание', 'pity; compassion'],
      ['哀願', 'aigan', 'мольба; горячая просьба', 'pleading; an earnest appeal'],
      ['可哀想', 'kawaisō', 'бедный; несчастный', 'pitiful; unfortunate', 'особое чтение слова', 'irregular word reading'],
      ['悲哀', 'hiai', 'горе; печаль', 'sorrow; grief'],
      ['哀れむ', 'awaremu', 'жалеть; сострадать', 'to pity; to feel compassion']
    ]},
    { id: 3, kanji: '挨', on: ['ai'], kun: [], meaning: ['приближаться; тесниться', 'to approach; to press close'], words: [
      ['挨拶', 'aisatsu', 'приветствие', 'greeting']
    ]},
    { id: 4, kanji: '愛', on: ['ai'], kun: [], meaning: ['любовь; привязанность', 'love; affection'], words: [
      ['愛情', 'aijō', 'любовь; нежность', 'love; affection'],
      ['愛読', 'aidoku', 'чтение с удовольствием', 'reading with pleasure'],
      ['恋愛', 'ren’ai', 'романтическая любовь', 'romantic love'],
      ['愛媛県', 'ehime-ken', 'префектура Эхимэ', 'Ehime Prefecture', 'особое чтение названия 愛媛', 'irregular reading of 愛媛']
    ]},
    { id: 5, kanji: '曖', on: ['ai'], kun: [], meaning: ['неясный; смутный', 'unclear; indistinct'], words: [
      ['曖昧', 'aimai', 'неясный; двусмысленный', 'vague; ambiguous']
    ]},
    { id: 6, kanji: '悪', on: ['aku', 'o'], kun: [['warui', 'плохой', 'bad']], meaning: ['зло; плохой', 'evil; bad'], words: [
      ['悪事', 'akuji', 'злодеяние; дурной поступок', 'wrongdoing; an evil deed'],
      ['悪い', 'warui', 'плохой', 'bad'],
      ['悪寒', 'okan', 'озноб', 'chills']
    ]},
    { id: 7, kanji: '握', on: ['aku'], kun: [['nigiru', 'сжимать; держать в руке', 'to grasp; to grip']], meaning: ['сжимать; овладевать', 'to grasp; to take hold'], words: [
      ['握手', 'akushu', 'рукопожатие', 'handshake'],
      ['把握', 'haaku', 'понимание; схватывание сути', 'grasp; understanding'],
      ['握力', 'akuryoku', 'сила хвата', 'grip strength'],
      ['掌握', 'shōaku', 'овладение; контроль', 'command; control'],
      ['お握り', 'onigiri', 'онигири; рисовый шарик', 'onigiri; a rice ball']
    ]},
    { id: 8, kanji: '圧', on: ['atsu'], kun: [], meaning: ['давление; подавление', 'pressure; suppression'], words: [
      ['圧力', 'atsuryoku', 'давление', 'pressure'],
      ['圧迫', 'appaku', 'сдавливание; давление', 'compression; pressure'],
      ['気圧', 'kiatsu', 'атмосферное давление', 'atmospheric pressure'],
      ['血圧', 'ketsuatsu', 'кровяное давление', 'blood pressure'],
      ['圧倒的', 'attōteki', 'подавляющий; ошеломляющий', 'overwhelming']
    ]},
    { id: 9, kanji: '扱', on: [], kun: [['atsukau', 'обращаться с; заниматься', 'to handle; to deal with']], meaning: ['обращение; работа с чем-либо', 'handling; treatment'], words: [
      ['取り扱う', 'toriatsukau', 'обращаться с; иметь дело с', 'to handle; to deal with'],
      ['客扱い', 'kyakuatsukai', 'обращение с гостями', 'treatment of guests']
    ]},
    { id: 10, kanji: '宛', on: [], kun: [['ateru', 'адресовать', 'to address']], meaning: ['адресовать; направлять кому-либо', 'to address; to direct to someone'], words: [
      ['宛てる', 'ateru', 'адресовать, например письмо', 'to address, e.g. a letter'],
      ['宛先', 'atesaki', 'адрес получателя; адресат', 'recipient’s address; addressee']
    ]},
    { id: 11, kanji: '嵐', on: [], kun: [['arashi', 'буря', 'storm']], meaning: ['буря; шторм', 'storm; tempest'], words: [
      ['嵐', 'arashi', 'буря; шторм', 'storm; tempest'],
      ['砂嵐', 'sunaarashi', 'песчаная буря', 'sandstorm']
    ]},
    { id: 12, kanji: '安', on: ['an'], kun: [['yasui', 'дешёвый; недорогой', 'cheap; inexpensive']], meaning: ['спокойствие; безопасность; недорогой', 'peace; safety; inexpensive'], words: [
      ['安全', 'anzen', 'безопасность; безопасный', 'safety; safe'],
      ['安価', 'anka', 'недорогой; низкая цена', 'inexpensive; a low price'],
      ['不安', 'fuan', 'тревога; беспокойство', 'anxiety; unease'],
      ['安い', 'yasui', 'дешёвый; недорогой', 'cheap; inexpensive']
    ]}
  ];
  const copy = {
    ru: {title: 'Карточки кандзи', single: 'По одной', grid: 'Сетка', prev: '← Назад', next: 'Дальше →', open: 'Открыть', view: 'Вид карточек', nav: 'Листать карточки', card: 'Карточка'},
    en: {title: 'Kanji cards', single: 'One card', grid: 'Grid', prev: '← Previous', next: 'Next →', open: 'Open', view: 'Card view', nav: 'Browse cards', card: 'Card'}
  };
  let language = document.documentElement.lang === 'ru' ? 'ru' : 'en';
  let view = window.matchMedia('(min-width: 1000px)').matches ? 'grid' : 'single';
  let index = 0;
  const content = root.querySelector('#kc-content');
  const pagination = root.querySelector('#kc-pagination');
  const previous = root.querySelector('#kc-prev');
  const next = root.querySelector('#kc-next');
  function cardMarkup(card) {
    const english = language === 'en';
    const t = copy[language];
    const on = card.on.length ? `<div class="kc-reading-group"><div class="kc-reading-label">ON</div><div class="kc-reading">${card.on.join(' · ')}</div></div>` : '';
    const kun = card.kun.length ? `<div class="kc-reading-group"><div class="kc-reading-label">KUN</div>${card.kun.map(r => `<div class="kc-reading">${r[0]}</div><div class="kc-reading-meaning">${r[english ? 2 : 1]}</div>`).join('')}</div>` : '';
    return `<article class="kc-sheet" aria-label="${t.card} ${card.id}: ${card.kanji}">
      <div class="kc-meta"><span>${english ? 'No.' : '№'} ${card.id}</span>${view === 'grid' ? `<button type="button" class="kc-expand" data-open="${card.id - 1}" aria-label="${t.open}: ${card.kanji}">${t.open}</button>` : ''}</div>
      <div class="kc-head"><h3 class="kc-kanji" lang="ja">${card.kanji}</h3><div>${on}${kun}</div></div>
      <p class="kc-meaning">${card.meaning[english ? 1 : 0]}</p>
      <ul class="kc-words">${card.words.map(w => `<li class="kc-word"><span class="kc-word-jp" lang="ja">${w[0]}</span><div class="kc-word-detail"><div class="kc-word-reading">${w[1]}</div><div class="kc-word-meaning">${w[english ? 3 : 2]}${w[4] ? `<span class="kc-note">${w[english ? 5 : 4]}</span>` : ''}</div></div></li>`).join('')}</ul>
    </article>`;
  }
  function render() {
    const t = copy[language];
    root.lang = language;
    root.querySelector('#kc-title').textContent = t.title;
    root.querySelector('#kc-viewgroup').setAttribute('aria-label', t.view);
    root.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
    root.querySelectorAll('[data-view]').forEach(button => {
      button.textContent = t[button.dataset.view];
      button.setAttribute('aria-pressed', String(button.dataset.view === view));
    });
    content.classList.toggle('kc-grid', view === 'grid');
    content.innerHTML = (view === 'grid' ? data : [data[index]]).map(cardMarkup).join('');
    pagination.hidden = view === 'grid';
    pagination.setAttribute('aria-label', t.nav);
    previous.textContent = t.prev;
    next.textContent = t.next;
    previous.disabled = index === 0;
    next.disabled = index === data.length - 1;
    root.querySelector('#kc-status').textContent = view === 'single' ? `${t.card} ${data[index].id}: ${data[index].kanji}` : `${t.grid}: ${data.map(d => d.kanji).join(' ')}`;
  }
  root.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button || !root.contains(button)) return;
    if (button.dataset.language) { language = button.dataset.language; render(); }
    else if (button.dataset.view) { view = button.dataset.view; render(); }
    else if (button.hasAttribute('data-open')) {
      index = Number(button.dataset.open); view = 'single'; render();
      root.querySelector('[data-view="single"]').focus({preventScroll: true});
      root.scrollIntoView({block: 'start', behavior: 'instant'});
    }
    else if (button.id === 'kc-prev' && index > 0) { index--; render(); }
    else if (button.id === 'kc-next' && index < data.length - 1) { index++; render(); }
  });
  document.addEventListener('onkun-language-change', event => { language = event.detail; render(); });
  render();
})();
