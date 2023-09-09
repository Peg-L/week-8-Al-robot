const introSwiper = new Swiper(".introSwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    768: {
      autoplay: false,
      // 左右箭頭
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  },
});

const reviewSwiper = new Swiper(".reviewSwiper", {
  // loop: true,
  slidesPerView: 1,
  // direction: "vertical",
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
      pagination: {
        el: ".review-swiper-pagination",
        type: "progressbar",
      },
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
      direction: "horizontal",
      pagination: {
        el: ".review-swiper-pagination",
        type: "progressbar",
      },
    },
  },
});
