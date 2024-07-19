import "swiper/css/bundle";
import { addSlider } from "./src/slider/addSlider.js";
import { findPostId } from "./src/post/postId.js";
import { clear } from "./src/post/clearInfoPost";

clear();
window.addEventListener("DOMContentLoaded", () => {
  addSlider();

  // setTimeout(() => {
  //   findPostId();
  // }, 0);
});

// if (navigator.platform.match(/iPhone|iPod|iPad/)) {
//   addSlider("ios");
//   import("./src/slider/sliderIos.css");
//   const { Swiper } = await import("swiper/bundle");
//   var swiper = new Swiper(".mySwiper", {
//     slidesPerView: "auto",
//     centeredSlides: true,
//     spaceBetween: 24,
//     grabCursor: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//       925: {
//         slidesPerView: 2,
//         spaceBetween: 10,
//       },
//     },
//   });
// } else {
//   addSlider("NO");
//   // const { Gallery } = await import("./src/slider/sliderClass.js");
//   // new Gallery(document.getElementById("gallery"));
// }

// switchReviews();
