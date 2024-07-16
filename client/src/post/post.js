import axios from "axios";
const classNameTitlePost = "head-article--title";
const classNameSubtitlePost = "head-article--subtitle";
const classNameLogo = "head-article--logo";
const classNameArticleImg = "content--article__img";
const classNameCompanyName = "head-article--companyName";
const classNameHeader = "article__header__title";
import { switchPost } from "./switchPost";
import { exitBth } from "./exit";

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

  let findActivePost = (data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].active === true) {
        newInfoPost(data[i]);
        switchPost(data, i);
      }
    }
    exitBth();
  };

  let newInfoPost = (data) => {
    document.querySelector(`.${classNameTitlePost}`).innerText = data.titlePost;
    document.querySelector(`.${classNameHeader}`).innerText = data.titlePost;
    document.querySelector(`.${classNameLogo}`).src = data.logoUrl;
    document.querySelector(`.${classNameSubtitlePost}`).innerText =
      data.subtitlePost;
    document.querySelector(`.${classNameArticleImg}`).src = data.photoText;
    document.querySelector(`.${classNameCompanyName}`).innerText =
      data.nameCompany;
    wrappedText(data.textPost);
  };

  let wrappedText = (text) => {
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
  };
  sendDataPostCase();
}
PostId();
