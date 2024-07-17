import axios from "axios";
const classNameExitBth = "exitBth";

export function exitBth() {
  const exitButton = document.querySelector(`.${classNameExitBth}`);
  if (exitButton) {
    exitButton.addEventListener("click", () => {
      window.location.href = "./src/post/post.html";
    });
  } else {
    console.error(`Element with class ${classNameExitBth} not found`);
  }
}
