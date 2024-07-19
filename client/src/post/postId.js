import axios from "axios";
const classNameSlideLink = "slide__item__link";

export function findPostId() {
  let slideLink = document.querySelectorAll(`.${classNameSlideLink}`);

  Array.from(slideLink).forEach((el) => {
    el.addEventListener("click", handlerSlideLinkClick);
  });

  async function sendDataFindPos(data) {
    try {
      await axios.post(`http://localhost:8000/api/cases/active/${data}`, {
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handlerSlideLinkClick(event) {
    const targetElement = event.target;
    const dataValue = targetElement.value;
    await sendDataFindPos(dataValue);
    window.location.href = "./src/post/post.html";
  }

  Array.from(slideLink).forEach((el) => {
    el.addEventListener("click", handlerSlideLinkClick);
  });
}
