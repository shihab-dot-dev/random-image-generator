import Mustache from "mustache";
import templateString from "./template.html?raw";
import "./style.scss";

export class SBaseHeaderComponent {
  constructor() {
    console.log("this is header component template", templateString);
    this.attachToEl = document.getElementById("app");
  }

  render() {
    const template = Mustache.render(templateString, {});
    this.attachToEl.insertAdjacentHTML("beforebegin", template);
  }
}
