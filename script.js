const translations = {
  en: {
    eyebrow: "On readings. Kun readings. Kanji by hand.", heroTitle: "Read it. Remember it. Write it.",
    heroCopy: "A quiet kanji practice companion for people who remember best with a pen and paper.", start: "Start with on readings",
    pathEyebrow: "The practice path", pathTitle: "Five sections", aboutTitle: "About the project",
    aboutText: "Built from Japanese study drills first compiled by the author in 2013.", onTitle: "On readings",
    onText: "Recall kanji from Sino-Japanese compounds.", kunTitle: "Kun readings", kunText: "Recall kanji from native Japanese words.",
    mixedTitle: "Mixed practice", mixedText: "Switch freely between on and kun readings.", testTitle: "Final test",
    testText: "Complete a whole block before revealing the answers.", available: "Available now", comingSoon: "Coming soon",
    practiceEyebrow: "Practice · On readings", practiceTitle: "Write the word on paper", close: "Close", promptLabel: "Reading",
    paperNote: "Write the answer in your notebook.", reveal: "Show answer", answerLabel: "Answer", again: "Repeat", remembered: "Remembered",
    reviewCounter: (count) => `${count} marked for review`, summaryTitle: "Round complete",
    summary: (known, review) => `${known} remembered · ${review} marked for another round`, restart: "Start again",
    reviewMissed: "Practise marked words", nothingToReview: "Nothing is marked for review yet.",
    soonToast: "This practice mode will be added next.", footer: "Made for pens, paper, and patient recall.",
  },
  ru: {
    eyebrow: "Онные чтения. Кунные чтения. Кандзи от руки.", heroTitle: "Прочитай. Вспомни. Напиши.",
    heroCopy: "Спокойный тренажёр кандзи для тех, кому лучше всего запоминается с ручкой и бумагой.", start: "Начать с онных чтений",
    pathEyebrow: "Путь повторения", pathTitle: "Пять разделов", aboutTitle: "О проекте",
    aboutText: "Первые задания основаны на материалах, которые автор составила во время изучения японского языка в 2013 году.",
    onTitle: "Онные чтения", onText: "Вспоминайте кандзи по японо-китайским сочетаниям.", kunTitle: "Кунные чтения",
    kunText: "Вспоминайте кандзи по исконно японским словам.", mixedTitle: "Смешанный режим",
    mixedText: "Свободно переключайтесь между онными и кунными чтениями.", testTitle: "Контрольная",
    testText: "Пройдите весь блок и только потом откройте ответы.", available: "Уже работает", comingSoon: "Скоро",
    practiceEyebrow: "Практика · Онные чтения", practiceTitle: "Напишите слово на бумаге", close: "Закрыть", promptLabel: "Чтение",
    paperNote: "Напишите ответ в блокноте.", reveal: "Показать ответ", answerLabel: "Ответ", again: "Повторить", remembered: "Вспомнила",
    reviewCounter: (count) => `На повторение: ${count}`, summaryTitle: "Раунд закончен",
    summary: (known, review) => `Вспомнила: ${known} · На повторение: ${review}`, restart: "Начать заново",
    reviewMissed: "Повторить отмеченные", nothingToReview: "Пока ничего не отмечено для повторения.",
    soonToast: "Этот режим будет добавлен следующим.", footer: "Для ручки, бумаги и спокойного вспоминания.",
  },
};

const questions = [
  { id: "sotto", reading: "sottō", kana: "そっとう", answer: "卒倒", en: "fainting", ru: "обморок" },
  { id: "tanto", reading: "tantō", kana: "たんとう", answer: "担当", en: "being in charge", ru: "ведение дела; ответственность" },
  { id: "tomin", reading: "tōmin", kana: "とうみん", answer: "冬眠", en: "hibernation", ru: "спячка" },
  { id: "tochaku", reading: "tōchaku", kana: "とうちゃく", answer: "到着", en: "arrival", ru: "прибытие" },
  { id: "tofu", reading: "tōfu", kana: "とうふ", answer: "豆腐", en: "tofu", ru: "тофу" },
  { id: "tosho", reading: "tosho", kana: "としょ", answer: "図書", en: "books", ru: "книги" },
  { id: "tosan", reading: "tōsan", kana: "とうさん", answer: "倒産", en: "bankruptcy", ru: "банкротство" },
  { id: "mendo", reading: "mendō", kana: "めんどう", answer: "面倒", en: "trouble; care", ru: "хлопоты; забота" },
  { id: "tomei", reading: "tōmei", kana: "とうめい", answer: "透明", en: "transparency", ru: "прозрачность" },
  { id: "toshi", reading: "tōshi", kana: "とうし", answer: "透視", en: "seeing through; clairvoyance", ru: "видение насквозь; ясновидение" },
];

const elements = {
  practice: document.querySelector("#practice"), questionView: document.querySelector("#question-view"),
  answerView: document.querySelector("#answer-view"), summaryView: document.querySelector("#summary-view"),
  reading: document.querySelector("#reading"), meaning: document.querySelector("#meaning"), answer: document.querySelector("#answer"),
  answerReading: document.querySelector("#answer-reading"), progressText: document.querySelector("#progress-text"),
  progressBar: document.querySelector("#progress-bar"), reviewCount: document.querySelector("#review-count"),
  summaryText: document.querySelector("#summary-text"), reviewButton: document.querySelector("#practice-review"), toast: document.querySelector("#toast"),
};

const storedLanguage = localStorage.getItem("onkun-language");
const browserLanguage = navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
let language = storedLanguage || browserLanguage;
let sessionQuestions = [...questions];
let currentIndex = 0;
let knownCount = 0;
let sessionReview = new Set();
let reviewIds = new Set(JSON.parse(localStorage.getItem("onkun-review") || "[]"));
let toastTimer;

const t = (key) => translations[language][key];
const saveReviewIds = () => localStorage.setItem("onkun-review", JSON.stringify([...reviewIds]));

function setLanguage(nextLanguage) {
  language = nextLanguage;
  localStorage.setItem("onkun-language", language);
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = t(element.dataset.i18n);
    if (typeof value === "string") element.textContent = value;
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  if (!elements.practice.hidden) renderCurrentState();
}

function updateReviewCounter() { elements.reviewCount.textContent = reviewIds.size ? t("reviewCounter")(reviewIds.size) : ""; }

function showQuestion() {
  const question = sessionQuestions[currentIndex];
  elements.questionView.hidden = false;
  elements.answerView.hidden = true;
  elements.summaryView.hidden = true;
  elements.reading.textContent = question.reading;
  elements.meaning.textContent = question[language];
  elements.answer.textContent = question.answer;
  elements.answerReading.textContent = `${question.kana} · ${question.reading}`;
  elements.progressText.textContent = `${currentIndex + 1} / ${sessionQuestions.length}`;
  elements.progressBar.style.width = `${((currentIndex + 1) / sessionQuestions.length) * 100}%`;
  updateReviewCounter();
}

function showAnswer() { elements.questionView.hidden = true; elements.answerView.hidden = false; }

function showSummary() {
  elements.questionView.hidden = true;
  elements.answerView.hidden = true;
  elements.summaryView.hidden = false;
  elements.summaryText.textContent = t("summary")(knownCount, sessionReview.size);
  elements.reviewButton.disabled = reviewIds.size === 0;
  elements.progressText.textContent = `${sessionQuestions.length} / ${sessionQuestions.length}`;
  elements.progressBar.style.width = "100%";
  updateReviewCounter();
}

function renderCurrentState() {
  if (!elements.summaryView.hidden) showSummary();
  else if (!elements.answerView.hidden) {
    const question = sessionQuestions[currentIndex];
    elements.meaning.textContent = question[language];
    elements.answerReading.textContent = `${question.kana} · ${question.reading}`;
    updateReviewCounter();
  } else showQuestion();
}

function advance(markedForReview) {
  const question = sessionQuestions[currentIndex];
  if (markedForReview) { reviewIds.add(question.id); sessionReview.add(question.id); }
  else { reviewIds.delete(question.id); knownCount += 1; }
  saveReviewIds();
  if (currentIndex >= sessionQuestions.length - 1) { showSummary(); return; }
  currentIndex += 1;
  showQuestion();
}

function startSession(onlyReview = false) {
  const markedQuestions = questions.filter((question) => reviewIds.has(question.id));
  if (onlyReview && markedQuestions.length === 0) { showToast(t("nothingToReview")); return; }
  sessionQuestions = onlyReview ? markedQuestions : [...questions];
  currentIndex = 0;
  knownCount = 0;
  sessionReview = new Set();
  elements.practice.hidden = false;
  showQuestion();
  elements.practice.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closePractice() {
  elements.practice.hidden = true;
  document.querySelector("#home").scrollIntoView({ behavior: "smooth", block: "start" });
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 2200);
}

document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
document.querySelector("#start-practice").addEventListener("click", () => startSession());
document.querySelector("#on-card").addEventListener("click", () => startSession());
document.querySelector("#close-practice").addEventListener("click", closePractice);
document.querySelector("#reveal-answer").addEventListener("click", showAnswer);
document.querySelector("#mark-known").addEventListener("click", () => advance(false));
document.querySelector("#mark-review").addEventListener("click", () => advance(true));
document.querySelector("#restart-all").addEventListener("click", () => startSession());
document.querySelector("#practice-review").addEventListener("click", () => startSession(true));
document.querySelectorAll("[data-coming-soon]").forEach((button) => button.addEventListener("click", () => showToast(t("soonToast"))));
setLanguage(language);
