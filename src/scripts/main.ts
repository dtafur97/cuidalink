const menuToggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
const mobileMenu = document.querySelector<HTMLElement>("#mobile-menu");

function closeMenu() {
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Abrir menú");
  if (mobileMenu) mobileMenu.hidden = true;
}

menuToggle?.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  menuToggle.setAttribute(
    "aria-label",
    expanded ? "Abrir menú" : "Cerrar menú",
  );
  if (mobileMenu) mobileMenu.hidden = expanded;
});
mobileMenu
  ?.querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuToggle?.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
    menuToggle.focus();
  }
});
document.addEventListener("click", (event) => {
  if (
    event.target instanceof Node &&
    !document.querySelector(".site-header")?.contains(event.target)
  )
    closeMenu();
});
window.matchMedia("(min-width: 641px)").addEventListener("change", closeMenu);

const screens = {
  home: {
    image: "/images/app-inicio.webp",
    alt: "Captura real de Inicio de CuidaLink: Mi hogar, alertas pendientes y dispositivos conectados",
    caption: "01 / Inicio",
    description: "Inicio reúne el estado del hogar y te indica cuándo necesitas actualizar la información.",
  },
  setup: {
    image: "/images/app-preparacion.webp",
    alt: "Captura real de CuidaLink: primer paso para preparar y agregar un adaptador",
    caption: "02 / Preparar el adaptador",
    description: "El registro empieza preparando el adaptador. La guía explica qué necesitas antes de identificarlo.",
  },
  personalize: {
    image: "/images/app-personalizacion.webp",
    alt: "Captura real de CuidaLink: nombre del dispositivo, ubicación y resumen del registro",
    caption: "03 / Nombre y ubicación",
    description: "Elige el nombre y la ubicación del aparato. El adaptador queda guardado en tu hogar con su conexión Wi-Fi pendiente.",
  },
} as const;

type AppScreen = keyof typeof screens;
const screenButtons = document.querySelectorAll<HTMLButtonElement>("[data-screen]");
screenButtons.forEach((button) => button.addEventListener("click", () => {
  const key = button.dataset.screen as AppScreen;
  const screen = screens[key];
  if (!screen) return;
  screenButtons.forEach((item) => {
    const selected = item === button;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-pressed", String(selected));
  });
  const capture = document.querySelector<HTMLImageElement>("#app-screen");
  if (capture) { capture.src = screen.image; capture.alt = screen.alt; }
  const caption = document.getElementById("screen-caption");
  if (caption) caption.textContent = screen.caption;
  const description = document.getElementById("screen-description");
  if (description) description.textContent = screen.description;
}));
// Content remains visible if scripting or IntersectionObserver is unavailable.
if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  document.documentElement.classList.add("reveal-ready");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  document
    .querySelectorAll("[data-reveal]")
    .forEach((element) => observer.observe(element));
}
