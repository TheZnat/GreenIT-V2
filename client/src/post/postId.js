import axios from "axios";
const classNameSlideLink = "slide__item__link";

export function findPostId() {
  let slideLink = document.querySelectorAll(`.${classNameSlideLink}`);

  Array.from(slideLink).forEach((el) => {
    el.addEventListener("click", handlerSlideLinkClick);
  });

  function handlerSlideLinkClick(event) {
    const targetElement = event.target;
    const dataValue = targetElement.value;

    axios
      .post(`http://localhost:8000/api/cases/active/${dataValue}`, {
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      })
      .then((response) => {
        console.log("POST Response:", response.data);
      })
      .catch((error) => {
        console.error("POST Error:", error);
      });
  }
}
