import "swiper/css/bundle";

import { addSlider } from "./src/slider/addSlider.js";
import { clear } from "./src/post/clearInfoPost";

clear();

window.addEventListener("DOMContentLoaded", () => {
  addSlider();
});
