class BannerCarousel {
  constructor() {
    this.slides = document.getElementsByClassName('banner__carousel-item');
    this.prevBtn = document.getElementById('banner__carousel-prev');
    this.nextBtn = document.getElementById('banner__carousel-next');
    this.slidePosition = 0;
    this.totalSlides = this.slides.length;
    this.events();
  }

  events() {
    this.nextBtn.addEventListener("click", () => this.moveToNextSlide());
    this.prevBtn.addEventListener("click", () => this.moveToPrevSlide());
  }

  hideAllSlides() {
    for (const slide of this.slides) {
      slide.classList.remove('banner__carousel-item--visible');
      slide.classList.add('banner__carousel-item--hidden');
    }
  }

  moveToNextSlide() {
    this.hideAllSlides();

    if (this.slidePosition === this.totalSlides - 1) {
      this.slidePosition = 0;
    } else {
      this.slidePosition++;
    }
    this.slides[this.slidePosition].classList.add('banner__carousel-item--visible');
  }

  moveToPrevSlide() {
    this.hideAllSlides();

    if (this.slidePosition === 0) {
      this.slidePosition = this.totalSlides - 1;
    } else {
      this.slidePosition--;
    }

    this.slides[this.slidePosition].classList.add('banner__carousel-item--visible');
  }
}

export default BannerCarousel;