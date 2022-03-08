import "./style.scss";
import { RandomImageComponent } from "@/components/random-image/index.js";

window.addEventListener("load", () => {
  console.log("hrllo fhjdhsjk f");
  new RandomImageComponent().render();
  new RandomImageComponent().generateImg();
  console.log("welcome to the random image generator app");
});
