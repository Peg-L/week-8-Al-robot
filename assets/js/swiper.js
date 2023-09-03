// const swiper = new Swiper(".swiper", {
//   loop: true,
//   // 左右箭頭
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// const reviewSwiper = new Swiper(".reviewSwiper", {
//   loop: true,
//   slidesPerView: 3,
//   spaceBetween: 24,
//   pagination: {
//     el: ".reviews-swiper-pagination",
//     type: "progressbar",
//   },
// });

const reviewSwiper = new Swiper(".reviewSwiper", {
  // loop: true,
  mousewheel: true,
  slidesPerView: 3,
  spaceBetween: 24,
  pagination: {
    el: ".review-swiper-pagination",
    type: "progressbar",
  },
});
