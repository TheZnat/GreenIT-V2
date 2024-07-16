import axios from "axios";
const classNameArrowsPrevious = "arrows-previous";
const classNameArrowsNext = "arrows-next";

export function switchPost(data, indexActive) {
  let previous = document.querySelector(`.${classNameArrowsPrevious}`);
  let next = document.querySelector(`.${classNameArrowsNext}`);

  // Удаляем старые обработчики событий, если они есть
  previous.removeEventListener("click", switchPostPrevious);
  next.removeEventListener("click", switchPostNext);

  previous.addEventListener("click", switchPostPrevious);
  next.addEventListener("click", switchPostNext);

  async function sendData(indexActive) {
    try {
      await axios.post(
        `http://localhost:8000/api/cases/active/${indexActive}`,
        {
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          },
        }
      );
    } catch (error) {
      console.error("POST Error:", error);
    }
  }

  async function switchPostNext() {
    if (data.length != indexActive + 1) {
      await sendData(indexActive + 1);
      location.reload();
    }
  }

  async function switchPostPrevious() {
    if (indexActive != 0) {
      await sendData(indexActive - 1);
      location.reload();
    }
  }
}
