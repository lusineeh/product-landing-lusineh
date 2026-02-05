const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// CTA modal (Phase 2: open + close button)
const modal = document.getElementById("cta-modal");
const openHeaderCta = document.getElementById("open-cta");
const openHeroCta = document.getElementById("hero-cta");
const closeBtn = document.getElementById("close-modal");

function openModal() {
  if (!modal) return;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

openHeaderCta?.addEventListener("click", openModal);
openHeroCta?.addEventListener("click", openModal);
closeBtn?.addEventListener("click", closeModal);


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
