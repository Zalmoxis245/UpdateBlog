const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");

if ( savedTheme === "dark" || (savedTheme === null && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    root.classList.add("dark-mode");
}

function updateButton() {
  const isDark = root.classList.contains("dark-mode");

  toggle.textContent = isDark ? "☀️ Light mode" : "🌙 Dark mode";
  toggle.setAttribute("aria-pressed", String(isDark));
}

toggle.addEventListener("click", () => {
  const isDark = root.classList.toggle("dark-mode");

  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateButton();
});

updateButton();
