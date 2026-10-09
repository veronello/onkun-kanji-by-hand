const translations = {
  en: {
    aboutTitle: "About the project",
    miscTitle: "Miscellaneous",
    miscText: "Sources, articles, interesting materials, and photos.",
    aboutText: "The exercises draw on the author's own study materials, compiled during her university years starting in 2013, and are supplemented with new original exercises.", onTitle: "On readings",
    onText: "Kanji review through compounds with on readings.", kunTitle: "Kun readings", kunText: "Kanji review through words with kun readings.",
    mixedTitle: "Mixed practice", mixedText: "Kanji review with a mix of on and kun readings.", testTitle: "Final test",
    testText: "A full-block recall test with answers shown at the end.", comingSoon: "Coming soon",
    soonToast: "This practice mode will be added next.",
  },
  ru: {
    aboutTitle: "О проекте",
    miscTitle: "Разное",
    miscText: "Источники, статьи, интересные материалы и фотографии.",
    aboutText: "Задания основаны на собственных учебных материалах автора, составленных в студенческие годы, начиная с 2013 года, и дополняются новыми авторскими упражнениями.",
    onTitle: "Онные чтения", onText: "Повторение иероглифов по сочетаниям с онными чтениями.", kunTitle: "Кунные чтения",
    kunText: "Повторение иероглифов по словам с кунными чтениями.", mixedTitle: "Смешанный режим",
    mixedText: "Повторение иероглифов по онным и кунным чтениям вперемешку.", testTitle: "Контрольная",
    testText: "Проверка всего блока с показом ответов в конце.", comingSoon: "Скоро",
    soonToast: "Этот режим будет добавлен следующим.",
  },
};

function readPreference(key) { try { return localStorage.getItem(key); } catch { return null; } }
function savePreference(key, value) { try { localStorage.setItem(key, value); } catch {} }
const storedLanguage = readPreference("onkun-language");
const browserLanguage = navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
let language = storedLanguage === "ru" || storedLanguage === "en" ? storedLanguage : browserLanguage;
const toast = document.querySelector("#toast");
let toastTimer;

function setLanguage(nextLanguage) {
  language = nextLanguage;
  savePreference("onkun-language", language);
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translations[language][element.dataset.i18n];
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  updateThemeButton();
  renderOn();
  if (toast.classList.contains("is-visible")) toast.textContent = translations[language].soonToast;
}

function showComingSoon() {
  window.clearTimeout(toastTimer);
  toast.textContent = translations[language].soonToast;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
document.querySelectorAll("[data-coming-soon]").forEach((button) => button.addEventListener("click", showComingSoon));
const themeToggle = document.querySelector("#theme-toggle");
function updateThemeButton() {
  const dark = document.documentElement.dataset.theme === "dark";
  const label = language === "ru" ? (dark ? "Светлая тема" : "Тёмная тема") : (dark ? "Light theme" : "Dark theme");
  themeToggle.textContent = label;
  themeToggle.setAttribute("aria-label", language === "ru" ? "Тёмная тема" : "Dark theme");
  themeToggle.setAttribute("aria-pressed", String(dark));
}
themeToggle.addEventListener("click", () => {
  const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#191919" : "#f8f9fa";
  savePreference("onkun-theme", theme);
  updateThemeButton();
});



Object.assign(translations.en, {
  openSet:'10 words · Open set', setTitle:'Set 1 · Student notes',
  setIntro:"10 compounds selected from the first page of the author's 2013 study notes. Writing on paper, with self-assessment.",
  paperInstructions:'The prompt gives a reading and a meaning. The answer is the whole word in kanji, written on paper.',
  readingNote:'ō and ū mark long vowels. Kana appears with the answer.', closeSet:'Back to sections',
  startReview:'Practice · answers after each word', startTest:'Test · answers at the end', startSaved:'Review marked words',
  reveal:'Show answer', nextWritten:'Written · next word', finishTest:'Written · show all answers',
  remembered:'Remembered', again:'Repeat later', resultTitle:'Self-check',
  resultNote:'Comparison with your paper answers. Mark words that need another round.', restart:'Back to set',
  saved:'Marked for review', noSaved:'No marked words yet.', review:'Practice', test:'Test', progress:'Word',
  completed:'Words completed', marked:'Repeat later', storageNote:'Marks are saved in this browser when storage is available.'
});
Object.assign(translations.ru, {
  openSet:'10 слов · Открыть набор', setTitle:'Набор 1 · Студенческие материалы',
  setIntro:'10 сочетаний с первой страницы авторских материалов 2013 года. Письмо на бумаге и самостоятельная проверка.',
  paperInstructions:'На экране — чтение и значение. Ответ — всё слово иероглифами на бумаге.',
  readingNote:'ō и ū обозначают долгие гласные. Кана появится вместе с ответом.', closeSet:'К разделам',
  startReview:'Повторение · ответ после каждого слова', startTest:'Контрольная · ответы в конце', startSaved:'Повторить отмеченное',
  reveal:'Показать ответ', nextWritten:'Написано · следующее слово', finishTest:'Написано · показать все ответы',
  remembered:'Вспомнила / вспомнил', again:'Повторить позже', resultTitle:'Самопроверка',
  resultNote:'Сравнение с ответами на бумаге. Здесь можно отметить слова для ещё одного повторения.', restart:'К началу набора',
  saved:'Отмечено для повторения', noSaved:'Пока нет отмеченных слов.', review:'Повторение', test:'Контрольная', progress:'Слово',
  completed:'Пройдено слов', marked:'Повторить позже', storageNote:'Отметки сохраняются в этом браузере, если доступно хранилище.'
});
const onUI = id => document.getElementById(id);
const savedKey = 'kanji-on-review-page1-v1';
let marked = new Set();
try { const value = JSON.parse(readPreference(savedKey)); if (Array.isArray(value)) marked = new Set(value.filter(id => onWords.some(w => w.id === id))); } catch {}
let onState = { stage:'setup', mode:'review', words:[], index:0, revealed:false };
function persistMarks() { savePreference(savedKey, JSON.stringify([...marked])); }
function renderOn() {
  const t = translations[language];
  onUI('on-setup').hidden = onState.stage !== 'setup';
  onUI('on-session').hidden = onState.stage !== 'session';
  onUI('on-results').hidden = onState.stage !== 'results';
  onUI('saved-count').textContent = `${marked.size ? t.saved + ': ' + marked.size : t.noSaved} ${t.storageNote}`;
  onUI('start-saved').disabled = !marked.size;
  onUI('repeat-on').disabled = !marked.size;
  if (onState.stage === 'session') {
    const w = onState.words[onState.index];
    onUI('on-progress').textContent = `${t[onState.mode]} · ${t.progress} ${onState.index + 1} / ${onState.words.length}`;
    onUI('on-meter').max = onState.words.length;
    onUI('on-meter').value = onState.index;
    onUI('on-meter').setAttribute('aria-label',t.progress);
    onUI('on-reading').textContent = w.reading;
    onUI('on-meaning').textContent = w[language];
    // Do not populate the answer until explicitly revealed.
    onUI('on-kanji').textContent = onState.revealed ? w.kanji : '';
    onUI('on-kana').textContent = onState.revealed ? w.kana : '';
    onUI('on-answer').hidden = !onState.revealed;
    onUI('on-rating').hidden = !onState.revealed;
    onUI('reveal-on').hidden = onState.mode === 'test' || onState.revealed;
    onUI('next-test').hidden = onState.mode !== 'test';
    onUI('next-test').textContent = onState.index === onState.words.length - 1 ? t.finishTest : t.nextWritten;
  }
  if (onState.stage === 'results') {
    onUI('on-result-text').textContent = `${t.completed}: ${onState.words.length}. ${t.saved}: ${onState.words.filter(w=>marked.has(w.id)).length}.`;
    const list = onUI('on-result-list'); list.replaceChildren();
    onState.words.forEach((w,i) => {
      const row = document.createElement('div'); row.className = 'on-result-row';
      const prompt = document.createElement('p'); prompt.textContent = `${i+1}. ${w.reading} — ${w[language]}`;
      const answer = document.createElement('p'); answer.lang = 'ja'; answer.textContent = `${w.kanji} · ${w.kana}`;
      const label = document.createElement('label'); const box = document.createElement('input'); box.type='checkbox'; box.checked=marked.has(w.id);
      box.addEventListener('change', () => { if(box.checked) marked.add(w.id); else marked.delete(w.id); persistMarks(); onUI('repeat-on').disabled=!marked.size; onUI('on-result-text').textContent=`${t.completed}: ${onState.words.length}. ${t.saved}: ${onState.words.filter(word=>marked.has(word.id)).length}.`; });
      label.append(box, document.createTextNode(t.marked)); row.append(prompt,answer,label); list.append(row);
    });
  }
}
function startOn(mode, savedOnly=false) {
  const words=onWords.filter(w=>!savedOnly || marked.has(w.id));
  if (!words.length) return;
  onState={stage:'session',mode,words,index:0,revealed:false};
  onUI('on-result-list').replaceChildren(); renderOn(); onUI('on-reading').focus();
}
function advanceOn(needsReview) {
  if(onState.stage!=='session')return;
  if(onState.mode==='review') {
    if(!onState.revealed)return;
    const id=onState.words[onState.index].id;
    if(needsReview)marked.add(id);else marked.delete(id);
    persistMarks();
  }
  onState.index++;onState.revealed=false;
  if(onState.index>=onState.words.length)onState.stage='results';
  renderOn();onUI(onState.stage==='results'?'on-result-title':'on-reading').focus();
}
onUI('on-card').addEventListener('click',()=>{ onUI('on-practice').hidden=false; document.querySelector('.path').hidden=true; renderOn(); onUI('on-title').focus(); });
onUI('close-on').addEventListener('click',()=>{onUI('on-practice').hidden=true;document.querySelector('.path').hidden=false;onUI('on-card').focus();});
onUI('start-review').addEventListener('click',()=>startOn('review'));
onUI('start-test').addEventListener('click',()=>startOn('test'));
['start-saved','repeat-on'].forEach(id=>onUI(id).addEventListener('click',()=>startOn('review',true)));
onUI('reveal-on').addEventListener('click',()=>{if(onState.stage!=='session'||onState.mode!=='review')return;onState.revealed=true;renderOn();onUI('remembered-on').focus();});
onUI('remembered-on').addEventListener('click',()=>advanceOn(false));
onUI('again-on').addEventListener('click',()=>advanceOn(true));
onUI('next-test').addEventListener('click',()=>advanceOn());
onUI('reset-on').addEventListener('click',()=>{onState.stage='setup';onUI('on-result-list').replaceChildren();renderOn();onUI('on-title').focus();});
setLanguage(language);
