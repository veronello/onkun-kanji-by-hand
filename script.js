const translations = {
  en: {
    aboutTitle: "About the project",
    kanjiTitle: "Kanji cards",
    openCards: "Open cards",
    openOn: "Start practice",
    openKun: "Start practice",
    cardsBack: "← Back to sections",
    kanjiText: "Kanji, readings, meanings, and compounds.",
    sourcesLink: "Sources (Excel) on GitHub",
    aboutText: "Kanji ON is a project designed to help learners review Japanese kanji included in the official Jōyō Kanji List (常用漢字表, 2010 revision).",
    aboutText2: "The project is intended for learners who have already studied the required set of kanji and wish to refresh their knowledge and bring it back into active use.",
    aboutText3: "The review process consists of exercises based on on-reading compounds and kun-readings, requiring learners to write the corresponding kanji by hand.",
    aboutText4: "An additional knowledge assessment test is currently under development.",
    readMore: "Read more", showLess: "Show less",
    onTitle: "ON readings",
    onText: "Kanji review through on-reading compounds.", kunTitle: "KUN readings", kunText: "Kanji review through words with kun readings.", testTitle: "Final test",
    testText: "A full-block recall test with answers shown at the end.", comingSoon: "Coming soon",
    miscTitle: "Miscellaneous",
    miscText: "Sources, articles, interesting materials, and photos.",
    soonToast: "This section is not available yet.",
  },
  ru: {
    aboutTitle: "О проекте",
    kanjiTitle: "Карточки с иероглифами",
    openCards: "Открыть карточки",
    openOn: "Начать повторение",
    openKun: "Начать повторение",
    cardsBack: "← К разделам",
    kanjiText: "Иероглифы, чтения, значения и сочетания.",
    sourcesLink: "Источники (Excel) на GitHub",
    aboutText: "Kanji ON — проект для повторения японских иероглифов, включённых в официальный список 常用漢字表 (редакция 2010 года).",
    aboutText2: "Проект ориентирован на тех, кто уже изучил иероглифический минимум и хочет восстановить свои знания, вернув их в активное использование.",
    aboutText3: "Повторение организовано в виде упражнений на основе онных сочетаний и кунных чтений, которые необходимо записать от руки иероглифами.",
    aboutText4: "Дополнительно разрабатывается тест для проверки знаний.",
    readMore: "Подробнее", showLess: "Свернуть",
    onTitle: "Онные чтения", onText: "Повторение иероглифов по онным сочетаниям.", kunTitle: "Кунные чтения",
    kunText: "Повторение иероглифов по словам с кунными чтениями.", testTitle: "Контрольная",
    testText: "Проверка всего блока с показом ответов в конце.", comingSoon: "Скоро",
    miscTitle: "Разное",
    miscText: "Источники, статьи, интересные материалы и фотографии.",
    soonToast: "Этот раздел пока недоступен.",
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
  updateAboutToggle();
  document.dispatchEvent(new CustomEvent("onkun-language-change", { detail: language }));
  if (toast.classList.contains("is-visible")) toast.textContent = translations[language].soonToast;
}

const aboutMore = document.querySelector("#about-more");
const aboutToggle = document.querySelector("#about-toggle");
function updateAboutToggle() {
  if (!aboutMore || !aboutToggle) return;
  aboutToggle.textContent = translations[language][aboutMore.hidden ? "readMore" : "showLess"];
}
aboutToggle?.addEventListener("click", () => {
  aboutMore.hidden = !aboutMore.hidden;
  aboutToggle.setAttribute("aria-expanded", String(!aboutMore.hidden));
  updateAboutToggle();
});

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

setLanguage(language);
