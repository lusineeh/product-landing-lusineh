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
