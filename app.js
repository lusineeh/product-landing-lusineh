const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const heroCta = document.getElementById("hero-cta");
if (heroCta) {
  heroCta.addEventListener("click", () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  });
}

document.querySelectorAll("[data-plan]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const plan = btn.getAttribute("data-plan");
    alert(`Selected plan: ${plan} (demo)`);
  });
});
// Active section highlight in navbar
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav a");

function setActiveLink() {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);
