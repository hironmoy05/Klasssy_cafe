import "../sass/main.scss";

import BannerCarousel from "./modules/bannerCarousel";

import Swiper from './modules/swiper/swiper';

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    240: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
  }
});

new BannerCarousel();

if (module.hot) {
  module.hot.accept();
}