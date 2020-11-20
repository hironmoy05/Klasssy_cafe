import "../sass/main.scss";

import Carousel from "./modules/carousel";

new Carousel();

if (module.hot) {
  module.hot.accept();
}