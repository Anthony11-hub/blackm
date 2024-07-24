const navToggler = document.querySelectorAll("[data-nav-toggler]")!;
const navbar = document.querySelector("[data-navbar]")!;
const overlay = document.querySelector("[data-overlay]")!;
const navLinks = document.querySelectorAll("[data-nav-link]")!;
const header = document.querySelector("[data-header]")!;

navToggler.forEach((navTogglerItem) => {
  navTogglerItem.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

export {};
