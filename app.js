// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Pricing buttons (demo)
document.querySelectorAll("[data-plan]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const plan = btn.getAttribute("data-plan");
    alert(`Selected plan: ${plan} (demo)`);
  });
});

// =======================
// GALLERY LIGHTBOX
// =======================
const galleryImages = Array.from(document.querySelectorAll(".gallery-grid img"));
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lbCloseBtn = document.querySelector(".lightbox-close");
const lbNextBtn = document.querySelector(".lightbox-next");
const lbPrevBtn = document.querySelector(".lightbox-prev");
const lbBackdrop = document.querySelector(".lightbox-backdrop");

let currentIndex = 0;

function isLightboxOpen() {
  return !!(lightbox && lightbox.classList.contains("show"));
}

function openLightbox(index) {
  if (!lightbox || !lightboxImg || galleryImages.length === 0) return;
  currentIndex = index;
  lightboxImg.src = galleryImages[currentIndex].src;
  lightbox.classList.add("show");
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("show");
}

function showNext() {
  if (galleryImages.length === 0 || !lightboxImg) return;
  currentIndex = (currentIndex + 1) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
}

function showPrev() {
  if (galleryImages.length === 0 || !lightboxImg) return;
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
}

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => openLightbox(index));
});

lbCloseBtn?.addEventListener("click", closeLightbox);
lbBackdrop?.addEventListener("click", closeLightbox);
lbNextBtn?.addEventListener("click", showNext);
lbPrevBtn?.addEventListener("click", showPrev);

document.addEventListener("keydown", (e) => {
  if (!isLightboxOpen()) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});

// =======================
// GALLERY FILTERS
// =======================
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    galleryImages.forEach((img) => {
      const category = img.dataset.category;
      img.style.display =
        filter === "all" || filter === category ? "block" : "none";
    });
  });
});
