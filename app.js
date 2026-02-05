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
  clearErrors();
  nameInput?.focus();
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
const backdrop = document.getElementById("modal-backdrop");
const form = document.getElementById("cta-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");

backdrop?.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal?.classList.contains("show")) {
    closeModal();
  }
});

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

function clearErrors() {
  nameError.textContent = "";
  emailError.textContent = "";
  nameInput.classList.remove("input-error");
  emailInput.classList.remove("input-error");
}

function setError(input, el, msg) {
  el.textContent = msg;
  input.classList.add("input-error");
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();

  const nameVal = nameInput.value.trim();
  const emailVal = emailInput.value.trim();

  let ok = true;

  if (!nameVal) {
    setError(nameInput, nameError, "Name is required.");
    ok = false;
  }

  if (!emailVal) {
    setError(emailInput, emailError, "Email is required.");
    ok = false;
  } else if (!isValidEmail(emailVal)) {
    setError(emailInput, emailError, "Please enter a valid email.");
    ok = false;
  }

  if (!ok) return;

  alert(`Thanks, ${nameVal}! (demo form submitted)`);
  form.reset();
  closeModal();
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
