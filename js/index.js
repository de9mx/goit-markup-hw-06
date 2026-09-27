document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuOpenBtn = document.querySelector(".mobile-menu-toggle");
  const mobileMenuCloseBtn = document.querySelector(".mobile-menu-close");
  const mobileMenuLinks = document.querySelectorAll(".mobile-nav-link");

  const openMobileMenu = () => {
    mobileMenu.classList.add("is-open");
    body.classList.add("no-scroll");
    mobileMenuOpenBtn?.setAttribute("aria-expanded", "true");
  };

  const closeMobileMenu = () => {
    mobileMenu.classList.remove("is-open");
    body.classList.remove("no-scroll");
    mobileMenuOpenBtn?.setAttribute("aria-expanded", "false");
  };

  mobileMenuOpenBtn?.addEventListener("click", openMobileMenu);
  mobileMenuCloseBtn?.addEventListener("click", closeMobileMenu);
  mobileMenuLinks.forEach((link) =>
    link.addEventListener("click", closeMobileMenu),
  );

  const modalBackdrop = document.getElementById("modal");
  const modalOpenBtn = document.querySelector(".hero-button");
  const modalCloseBtn = document.querySelector(".modal-close");

  const openModal = () => {
    modalBackdrop.classList.add("is-open");
    body.classList.add("no-scroll");
  };

  const closeModal = () => {
    modalBackdrop.classList.remove("is-open");
    body.classList.remove("no-scroll");
  };

  modalOpenBtn?.addEventListener("click", openModal);
  modalCloseBtn?.addEventListener("click", closeModal);

  modalBackdrop?.addEventListener("click", (event) => {
    if (event.target === modalBackdrop) closeModal();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (modalBackdrop?.classList.contains("is-open")) closeModal();
    if (mobileMenu?.classList.contains("is-open")) closeMobileMenu();
  });

  const desktopQuery = window.matchMedia("(min-width: 768px)");
  desktopQuery.addEventListener("change", (event) => {
    if (event.matches) closeMobileMenu();
  });
});
