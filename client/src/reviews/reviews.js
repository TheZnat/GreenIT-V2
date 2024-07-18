import axios from "axios";
const allIconsClass = "reviews--icon";
const textFroReviewsClass = "reviews__area--text";
const swipeLogoClass = "swipeLogo";
const classNameReviewsIcon = "reviews--icon-img";

export function switchReviews() {
  let dataReviews;

  async function sendDataForReview() {
    try {
      const dataGet = await axios.get(
        "http://localhost:8000/api/cases/reviews"
      );
      dataReviews = await dataGet.data;

      // Проверяем, что данные загружены
      if (dataReviews && dataReviews.length > 0) {
        addTextFroReviews(dataReviews, 0);

        Array.from(document.querySelectorAll(`.${allIconsClass}`)).forEach(
          (el, index) => {
            let imgElement = el.querySelector(`.${classNameReviewsIcon}`);
            if (imgElement) {
              imgElement.src = dataReviews[index].iconUrl;
            }
            el.addEventListener("click", handlerSwitchClick);
          }
        );
      } else {
        console.error("No reviews data available.");
      }
    } catch (e) {
      console.error(e);
    }
  }
  sendDataForReview();

  let textFroReviews = document.querySelector(`.${textFroReviewsClass}`);
  let swipeLogo = document.querySelector(`.${swipeLogoClass}`);

  function addTextFroReviews(data, index) {
    textFroReviews.innerHTML = `
      <p class="animate__text-reviews animate__reviews--text">${data[index].textRev}</p>
      <div class="reviews__text--author animate__reviews--subtitle">
        <p class="text--author">${data[index].author}</p>
        <p>${data[index].position}</p>
      </div>`;
    swipeLogo.src = data[index].logoUrl;
  }

  function handlerSwitchClick(event) {
    const targetElement = event.target;
    const dataValue = targetElement.dataset.id;
    addTextFroReviews(dataReviews, dataValue);
  }
}
