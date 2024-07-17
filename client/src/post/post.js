import axios from "axios";
const classNameTitlePost = "head-article--title";
const classNameSubtitlePost = "head-article--subtitle";
const classNameLogo = "head-article--logo";
const classNameArticleImg = "content--article__img";
const classNameCompanyName = "head-article--companyName";
const classNameHeader = "article__header__title";
import { switchPost } from "./switchPost";
import { exitBth } from "./exit";

window.addEventListener("DOMContentLoaded", PostId);

export function PostId() {
  async function sendDataPostCase() {
    try {
      const dataGet = await axios.get(
        "http://localhost:8000/api/cases/postCase",
        {
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          },
        }
      );
      const data = await dataGet.data;
      findActivePost(data);
    } catch (e) {
      console.error(e);
    }
  }

  sendDataPostCase();

  let findActivePost = (data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].active === true) {
        newInfoPost(data[i]);
        switchPost(data, i);
      }
    }
    exitBth();
  };

  function newInfoPost(data) {
    document.querySelector(`.${classNameTitlePost}`).innerText = data.titlePost;
    document.querySelector(`.${classNameHeader}`).innerText = data.titlePost;
    document.querySelector(`.${classNameLogo}`).src = data.logoUrl;
    document.querySelector(`.${classNameSubtitlePost}`).innerText =
      data.subtitlePost;
    document.querySelector(`.${classNameArticleImg}`).src = data.photoText;
    document.querySelector(`.${classNameCompanyName}`).innerText =
      data.nameCompany;
    wrappedText(data.textPost);
  }

  function wrappedText(text) {
    let test = document.querySelector(`.${classNameArticleImg}`);
    return text
      .split("\n")
      .filter((v) => v.trim())
      .map((content) => {
        test.insertAdjacentHTML(
          "afterend",
          `<p class="content--article__text">${content.trim()}</p>`
        );
      });
  }
}
