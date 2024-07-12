import "swiper/css/bundle";
import { addSlider } from "./src/slider/addSlider.js";
import { switchReviews } from "./src/reviews/reviews.js";
import { findPostId } from "./src/post/postId.js";
// import {openPostPage} from "./src/post/post.js";

if (navigator.platform.match(/iPhone|iPod|iPad/)) {
  addSlider("ios");
  import("./src/slider/sliderIos.css");
  const { Swiper } = await import("swiper/bundle");
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 24,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      925: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });
} else {
  addSlider("NO");
  const { Gallery } = await import("./src/slider/sliderClass.js");
  new Gallery(document.getElementById("gallery"));
}

findPostId();

switchReviews();
