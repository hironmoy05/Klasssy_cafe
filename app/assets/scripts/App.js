import "../sass/main.scss";

import BannerCarousel from "./modules/bannerCarousel";

import Swiper from './modules/swiper/swiper';

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
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
    140: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    590: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    840: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1424: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
  }
});

new BannerCarousel();

// Food
const menuTabs = document.querySelector('.menu__tabs');
const menuContent = document.querySelectorAll('article');
const link = document.querySelectorAll('.icon-link');

menuContent[0].classList.remove('hidden');

function slideFood(e) {
  for (let i = 0; i < menuContent.length; i++) {
    menuContent[i].classList.add('hidden');
    link[i].classList.remove('active');
  };

  if (e.target.parentElement.parentElement.classList.contains('menu__BreakFast') || e.target.classList.contains('menu__BreakFast-link')) {
    menuContent[0].classList.remove('hidden');
    link[0].classList.add('active');
  }

  if (e.target.parentElement.parentElement.classList.contains('menu__Lunch') || e.target.classList.contains('menu__Lunch-link')) {
    menuContent[1].classList.remove('hidden');
    link[1].classList.add('active');
  }

  if (e.target.parentElement.parentElement.classList.contains('menu__Dinner') || e.target.classList.contains('menu__Dinner-link')) {
    menuContent[2].classList.remove('hidden');
    link[2].classList.add('active');
  }
}

menuTabs.addEventListener('click', slideFood);



if (module.hot) {
  module.hot.accept();
}