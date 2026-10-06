const translations = {
  en: {
    aboutTitle: "About the project",
    aboutText: "The exercises draw on the author's own study materials, compiled during her university years starting in 2013, and are supplemented with new original exercises.", onTitle: "On readings",
    onText: "Kanji review through compounds with on readings.", kunTitle: "Kun readings", kunText: "Kanji review through words with kun readings.",
    mixedTitle: "Mixed practice", mixedText: "Kanji review with a mix of on and kun readings.", testTitle: "Final test",
    testText: "A full-block recall test with answers shown at the end.", comingSoon: "Coming soon",
    soonToast: "This practice mode will be added next.",
  },
  ru: {
    aboutTitle: "О проекте",
    aboutText: "Задания основаны на собственных учебных материалах автора, составленных в студенческие годы, начиная с 2013 года, и дополняются новыми авторскими упражнениями.",
    onTitle: "Онные чтения", onText: "Повторение иероглифов по сочетаниям с онными чтениями.", kunTitle: "Кунные чтения",
    kunText: "Повторение иероглифов по словам с кунными чтениями.", mixedTitle: "Смешанный режим",
    mixedText: "Повторение иероглифов по онным и кунным чтениям вперемешку.", testTitle: "Контрольная",
    testText: "Проверка всего блока с показом ответов в конце.", comingSoon: "Скоро",
    soonToast: "Этот режим будет добавлен следующим.",
  },
};

const storedLanguage = localStorage.getItem("onkun-language");
const browserLanguage = navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
let language = storedLanguage === "ru" || storedLanguage === "en" ? storedLanguage : browserLanguage;
const toast = document.querySelector("#toast");
let toastTimer;

function setLanguage(nextLanguage) {
  language = nextLanguage;
  localStorage.setItem("onkun-language", language);
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translations[language][element.dataset.i18n];
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
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
setLanguage(language);
