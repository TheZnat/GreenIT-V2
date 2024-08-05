const allIconsClass = "reviews--icon";
const textFroReviewsClass = "reviews__area--text";
const swipeLogoClass = "swipeLogo";
const classNameReviewsIcon = "reviews--icon-img";

export function switchReviews(dataReviews) {
  let textFroReviews = document.querySelector(`.${textFroReviewsClass}`);
  let swipeLogo = document.querySelector(`.${swipeLogoClass}`);
  const logoUrlArray = [
    "/images/Review/ReviewIconF.svg",
    "/images/Review/ReviewIconS.svg",
    "/images/Review/ReviewIconFour.svg",
    "/images/Review/ReviewIconT.svg",
  ];

  function findFirstLetter(index, data) {
    for (let i = index; i < data.length; i++) {
      if (data[i].id === index) {
        let result = data[i].nameCompany.substring(0, 1);
        return result;
      }
    }
  }

  // Проверяем, что данные загружены
  if (dataReviews && dataReviews.length > 0) {
    addTextFroReviews(dataReviews, 0);

    Array.from(document.querySelectorAll(`.${allIconsClass}`)).forEach(
      (el, index) => {
        el.style.backgroundImage = `url(${logoUrlArray[index]})`;
        el.innerHTML = `<div class="iconText" data-id="${index}">${findFirstLetter(
          index,
          dataReviews
        ).toUpperCase()}</div>`;
        el.addEventListener("click", handlerSwitchClick);
      }
    );
  } else {
    console.error("No reviews data available.");
  }

  function addTextFroReviews(data, index) {
    textFroReviews.innerHTML = `
     <p class="text--nameCompany">${data[index].nameCompany}</p>
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
