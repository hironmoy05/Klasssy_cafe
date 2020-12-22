import throttle from 'lodash/throttle';

class StickyHeader {
  constructor() {
    this.siteHeader = document.querySelector('.header');
    this.events();
  }

  events() {
    window.addEventListener('scroll', throttle(() => this.runOnScroll(), 200))
  }

  runOnScroll() {
    if (window.scrollY > 350) {
      this.siteHeader.classList.add('header--sticky');
    } else {
      this.siteHeader.classList.remove('header--sticky');
    }
  }
}

export default StickyHeader;