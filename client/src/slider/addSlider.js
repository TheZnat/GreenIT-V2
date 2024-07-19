import axios from "axios";
import { switchReviews } from "../reviews/reviews";
import { findPostId } from "../post/postId";

export function addSlider() {
  let dataReviews;

  async function addSliderJson(data) {
    const caseCards = document.createElement("div");
    caseCards.classList.add("case__cards");
    caseCards.setAttribute("id", "gallery");

    const swiperWrapper = document.createElement("div");
    swiperWrapper.classList.add("gallery-line");

    let htmlSlider = "";

    for (let i = 0; i < data.length; i++) {
      htmlSlider += `
        <div class="gallery-slide">
          <div class="slide">
            <img src="${data[i].logoUrl}" alt="логотип" class="slide__item__img--iconLogo" loading="lazy">
            <p class="slide__item__title">${data[i].titlePost}</p>
            <button class="bth--resetting-styles slide__item__link" value="${i}">Подробнее</button>
          </div>
        </div>
      `;
    }

    swiperWrapper.innerHTML = htmlSlider;
    caseCards.append(swiperWrapper);
    document.querySelector(".test").append(caseCards);
    findPostId();

    const module = await import("/src/slider/sliderClass.js");
    const { Gallery } = module;
    new Gallery(caseCards);
  }

  async function addDataForSlider() {
    try {
      const dataGet = await axios.get(
        "http://localhost:8000/api/cases/reviews"
      );
      dataReviews = dataGet.data;
      addSliderJson(dataReviews);
      switchReviews(dataReviews);
    } catch (e) {
      console.error(e);
    }
  }

  addDataForSlider();
}
