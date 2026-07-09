/* ============================================================
   Kauthec DS - showcase interactions
   Vanilla. Sem dependencia. WebGL desligado (nenhuma das tres
   referencias industriais usa shader; a principal tem zero glow).
   ============================================================ */

const root = document.documentElement;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------------------------------------------------- tema */
const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");
const STORAGE_KEY = "kauthec-ds-theme";

const savedTheme = localStorage.getItem(STORAGE_KEY);
const requestedTheme = new URLSearchParams(window.location.search).get("theme");
const initialTheme = requestedTheme || savedTheme || "dark";

applyTheme(initialTheme);

function applyTheme(theme) {
  const isLight = theme === "light";
  root.classList.toggle("theme-light", isLight);
  root.classList.toggle("theme-dark", !isLight);
  if (themeLabel) themeLabel.textContent = isLight ? "Claro" : "Escuro";
}

themeToggle?.addEventListener("click", () => {
  const next = root.classList.contains("theme-light") ? "dark" : "light";
  applyTheme(next);
  localStorage.setItem(STORAGE_KEY, next);
});

/* ---------------------------------------------------------- scroll reveal
   Por bloco, nao por elemento. O gesto do machin. */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));

/* ---------------------------------------------------------- nav ativa */
const navLinks = [...document.querySelectorAll(".nav a")];
const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-38% 0px -56% 0px" }
);

document.querySelectorAll("main section[id]").forEach((section) => navObserver.observe(section));

/* ---------------------------------------------------------- copiar swatch */
document.querySelectorAll("[data-copy]").forEach((node) => {
  node.addEventListener("click", async () => {
    const value = node.getAttribute("data-copy");
    const label = node.querySelector("em");
    if (!label) return;
    try {
      await navigator.clipboard.writeText(value);
      label.textContent = "copiado";
      window.setTimeout(() => {
        label.textContent = value;
      }, 850);
    } catch {
      label.textContent = value;
    }
  });
});

/* ---------------------------------------------------------- motion lab */
const motionLab = document.getElementById("motionLab");
const replayMotion = document.getElementById("replayMotion");

function playMotionLab() {
  if (!motionLab) return;
  motionLab.classList.remove("is-playing");
  void motionLab.offsetWidth;
  motionLab.classList.add("is-playing");
}

replayMotion?.addEventListener("click", playMotionLab);
if (!prefersReducedMotion) window.setTimeout(playMotionLab, 900);
