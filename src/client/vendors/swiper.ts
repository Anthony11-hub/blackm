async function initSwiper() {
  try {
    const { default: Swiper } = await import("swiper");
    const { Navigation, Pagination } = await import("swiper/modules");

    Swiper.use([Navigation, Pagination]);

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
  } catch (error) {
    console.error("Error loading Swiper:", error);
  }
}

// using dynamic imports instead
async function initCategorySwiper() {
  try {
    const { default: Swiper } = await import("swiper");
    const { Navigation, Pagination } = await import("swiper/modules");

    Swiper.use([Navigation, Pagination]);

    new Swiper(".slide-content", {
      slidesPerView: 8,
      spaceBetween: 10,
      loop: false,
      breakpoints: {
        0: { slidesPerView: 3 },
        520: { slidesPerView: 4 },
        768: { slidesPerView: 5 },
        950: { slidesPerView: 6 },
        1200: { slidesPerView: 8 },
      },
    });
  } catch (error) {
    console.error("Error loading Swiper:", error);
  }
}

document.addEventListener("DOMContentLoaded", initCategorySwiper);
// document.addEventListener("DOMContentLoaded", initSwiper);
