import Mustache from "mustache";
import templateString from "./template.html?raw";
import { unsplash } from "./constants/url.js";
import "./style.scss";

export class RandomImageComponent {
  constructor() {
    this.attachToEl = document.getElementById("app");
  }
  render() {
    const template = Mustache.render(templateString, {
      status: "testing user name",
    });
    this.attachToEl.insertAdjacentHTML("beforeend", template);
  }
  async generateImg(filter = "coding") {
    const token = process.env.UNSPLASH_ACCESS_TOKEN;
    let response = await fetch(
      `${unsplash.base_url}${unsplash.random_img_ep}?client_id=${token}&query=${filter}`
    );
    const finalData = await response.json();
    console.log("response is", finalData.urls.small);
    return finalData.urls.small;
  }
}
