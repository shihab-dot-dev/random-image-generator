import Mustache from "mustache";
import templateString from "./template.html?raw";
import "./style.css";

export class SBaseModalBoxComponent {
  constructor() {
    this.attachToEl = document.getElementById("all-modals");
  }

  render() {
    const template = Mustache.render(templateString, {});
    this.attachToEl.insertAdjacentHTML("beforeend", template);
  }
}
