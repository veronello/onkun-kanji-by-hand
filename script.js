const translations = {
  en: {
    aboutTitle: "About the project",
    aboutText: "The exercises draw on the author's own study materials, compiled during her university years starting in 2013, and are supplemented with new original exercises.", onTitle: "On readings",
    onText: "Recall kanji from Sino-Japanese compounds.", kunTitle: "Kun readings", kunText: "Recall kanji from native Japanese words.",
    mixedTitle: "Mixed practice", mixedText: "Switch freely between on and kun readings.", testTitle: "Final test",
    testText: "Complete a whole block before revealing the answers.", comingSoon: "Coming soon",
    soonToast: "This practice mode will be added next.",
  },
  ru: {
    aboutTitle: "О проекте",
    aboutText: "Задания основаны на собственных учебных материалах автора, составленных в студенческие годы, начиная с 2013 года, и дополняются новыми авторскими упражнениями.",
    onTitle: "Онные чтения", onText: "Вспоминайте кандзи по японо-китайским сочетаниям.", kunTitle: "Кунные чтения",
    kunText: "Вспоминайте кандзи по исконно японским словам.", mixedTitle: "Смешанный режим",
    mixedText: "Свободно переключайтесь между онными и кунными чтениями.", testTitle: "Контрольная",
    testText: "Пройдите весь блок и только потом откройте ответы.", comingSoon: "Скоро",
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
