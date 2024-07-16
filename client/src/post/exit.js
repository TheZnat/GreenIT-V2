import axios from "axios";
const classNameExitBth = "exitBth";

export function exitBth() {
  const exitButton = document.querySelector(`.${classNameExitBth}`);
  if (exitButton) {
    exitButton.addEventListener("click", async () => {
      try {
        const dataGet = await axios.get(
          "http://localhost:8000/api/cases/exit",
          {
            headers: {
              "Cache-Control": "no-cache, no-store, must-revalidate",
              Pragma: "no-cache",
              Expires: "0",
            },
          }
        );
      } catch (e) {
        console.log(e);
      }
    });
  } else {
    console.error(`Element with class ${classNameExitBth} not found`);
  }
}
