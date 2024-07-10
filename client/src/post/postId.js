import infoForReviews from "../reviews/reviews.json";

const classNameSlideLink = "slide__item__link";

export function findPostId() {
  let slideLink = document.querySelectorAll(`.${classNameSlideLink}`);
  const fs = require('fs');

  Array.from(slideLink).forEach((el) => {
    el.addEventListener("click", handlerSlideLinkClick);
  });

  function handlerSlideLinkClick(event) {
    // location.href = "/src/post/post.html";
    const targetElement = event.target;
    const dataValue = targetElement.value;
    // console.log(infoForReviews.length);
    

    let jsonData = JSON.parse(infoForReviews);

    jsonData.forEach(item => {
        if (item.id === dataValue) {
            item.active = true;   
        }
    });


    jsonData.forEach(item => {
        if (item.id === dataValue) {
            item.active = true;   
        }
        console.log(item.id,'active', item.active);
    });

  }
}
