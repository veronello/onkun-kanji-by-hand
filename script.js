const translations = {
  en: {
    aboutTitle: "About the project",
    kanjiTitle: "Kanji cards",
    openCards: "12 kanji · Open cards",
    cardsBack: "← Back to sections",
    kanjiText: "Kanji, readings, meanings, and compounds.",
    sourcesLink: "Sources (Excel) on GitHub",
    aboutText: "The exercises draw on the author's own study materials, compiled during her university years starting in 2013, and are supplemented with new original exercises.", onTitle: "ON readings",
    onText: "Kanji review through compounds with on readings.", kunTitle: "KUN readings", kunText: "Kanji review through words with kun readings.", testTitle: "Final test",
    testText: "A full-block recall test with answers shown at the end.", comingSoon: "Coming soon",
    soonToast: "This section is not available yet.",
  },
  ru: {
    aboutTitle: "О проекте",
    kanjiTitle: "Карточки с иероглифами",
    openCards: "12 иероглифов · Открыть карточки",
    cardsBack: "← К разделам",
    kanjiText: "Иероглифы, чтения, значения и сочетания.",
    sourcesLink: "Источники (Excel) на GitHub",
    aboutText: "Задания основаны на собственных учебных материалах автора, составленных в студенческие годы, начиная с 2013 года, и дополняются новыми авторскими упражнениями.",
    onTitle: "Онные чтения", onText: "Повторение иероглифов по сочетаниям с онными чтениями.", kunTitle: "Кунные чтения",
    kunText: "Повторение иероглифов по словам с кунными чтениями.", testTitle: "Контрольная",
    testText: "Проверка всего блока с показом ответов в конце.", comingSoon: "Скоро",
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
  document.dispatchEvent(new CustomEvent("onkun-language-change", { detail: language }));
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

setLanguage(language);

