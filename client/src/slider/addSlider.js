import axios from "axios";
import { switchReviews } from "../reviews/reviews";
import { findPostId } from "../post/postId";
import { PREFIX } from "../helper/Api";

export function addSlider() {
  let dataReviews;

  async function addSliderJson(data) {
    let htmlSlider = "";

    if (navigator.platform.match(/iPhone|iPod|iPad/)) {
      // iso
      for (let i = 0; i < data.length; i++) {
        htmlSlider += `
            <div class="swiper-slide">
              <div class="slide">
                <img src="${data[i].logoUrl}" alt="логотип" class="slide__item__img--iconLogo"
                  loading="lazy">
                <p class="slide__item__title">${data[i].titlePost}</p>
                <button class="bth--resetting-styles slide__item__link slide__item__link--main" value="${i}">Подробнее</button>
              </div>
            </div>`;
      }
      const mySwiper = document.createElement("div");
      mySwiper.classList.add("swiper-container", "mySwiper");
      mySwiper.innerHTML = `
      <div class="swiper-wrapper">
        ${htmlSlider}
      </div>
      <div class="swiper-pagination"></div>
    `;
      let temp = document.querySelector(".test");
      temp.append(mySwiper);
      temp.style.marginLeft = "-12px";
      findPostId(1);
      import("./sliderIos.css");

      const module = await import("swiper/bundle");
      const { Swiper } = module;
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
      for (let i = 0; i < data.length; i++) {
        htmlSlider += `
          <div class="gallery-slide">
            <div class="slide">
              <img src="${data[i].logoUrl}" alt="логотип" class="slide__item__img--iconLogo" loading="lazy">
              <p class="slide__item__title">${data[i].titlePost}</p>
              <button class="bth--resetting-styles slide__item__link slide__item__link--main" value="${i}">Подробнее</button>
            </div>
          </div>`;
      }
      const caseCards = document.createElement("div");
      caseCards.classList.add("case__cards");
      caseCards.setAttribute("id", "gallery");

      const swiperWrapper = document.createElement("div");
      swiperWrapper.classList.add("gallery-line");

      swiperWrapper.innerHTML = htmlSlider;
      caseCards.append(swiperWrapper);
      document.querySelector(".test").append(caseCards);
      findPostId(1);

      const module = await import("/src/slider/sliderClass.js");
      const { Gallery } = module;
      new Gallery(caseCards);
    }
  }

  async function addDataForSlider() {
    try {
      const dataGet = await axios.get(`${PREFIX}/reviews`);
      dataReviews = dataGet.data;
      addSliderJson(dataReviews);
      switchReviews(dataReviews);
    } catch (e) {
      console.error(e);
    }
  }

  addDataForSlider();
}
