const themeToggle = document.querySelector(".theme-toggle");
const STORAGE_KEY = "theme";
let theme = loadTheme();

function loadTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved === null) {
    return "light";
  }

  return JSON.parse(saved);
}

function applyTheme() {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function saveTheme() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
}

let inactivityTimer;

function resetTimer() {
  themeToggle.classList.remove("theme-toggle-inactive");

  clearTimeout(inactivityTimer);

  inactivityTimer = setTimeout(() => {
    themeToggle.classList.add("theme-toggle-inactive");
    console.log("Timer reset");
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme()
  resetTimer();
});

document.addEventListener("pointermove", () => {
  resetTimer();
});

document.addEventListener("keydown", () => {
  resetTimer();
});

document.addEventListener("click", () => {
  resetTimer();
});

themeToggle.addEventListener("click", () => {
  if (theme === "light") {
    theme = "dark";
    saveTheme();
  } else if (theme === "dark") {
    theme = "light";
    saveTheme();
  }
  console.log(theme);
  applyTheme();
});
