// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
// import "swiper/swiper-bundle.min.css";

export function initHeroSwiper() {
  new Swiper(".hero-slide-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
    centeredSlides: true,
    fadeEffect: {
      crossFade: true, // Corrected property name for fade effect
    },
    navigation: {
      nextEl: ".hero-swiper-button-next",
      prevEl: ".hero-swiper-button-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
    },
  });
}

export function initSwiper() {
  new Swiper(".slide-content-view", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: false,
    centeredSlides: true,
    fadeEffect: {
      crossFade: true,
    },
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: { slidesPerView: 2 },
      520: { slidesPerView: 3 },
      950: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
  });
}

export function initCategorySwiper() {
  new Swiper(".slide-content", {
    slidesPerView: 8,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    fadeEffect: {
      crossFade: true,
    },
    grabCursor: true,
    breakpoints: {
      0: { slidesPerView: 2 },
      520: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      950: { slidesPerView: 6 },
      1200: { slidesPerView: 8 },
    },
  });
}
