import templateString from "./template.html?raw";
import Mustache from "mustache";
import "./style.scss";
import PubSub from "@/utils/pubsub.js";

export class SearchFormComponent {
  constructor(renderToID, pos = "afterbegin") {
    this.renderToID = document.getElementById(renderToID);
    this.pos = pos;
  }

  render() {
    const template = Mustache.render(templateString, {});
    this.renderToID.insertAdjacentHTML(this.pos, template);
    return this.getQueryFromInput();
  }

  getQueryFromInput() {
    const getBtnEl = document.querySelector(
      "#sh-search-form-cmpnt #trigger-btn"
    );
    let queryString = "";

    getBtnEl.addEventListener("click", (e) => {
      // grab the input el and its value
      const getInputEl = document.querySelector("#sh-search-form-cmpnt input");
      queryString = getInputEl.value;
      console.log("getting query string", queryString);
      const pubSub = new PubSUb();
    });
  }
}
