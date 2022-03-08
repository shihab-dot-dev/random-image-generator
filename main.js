import "./style.scss";
import { RandomImageComponent } from "@/components/random-image/index.js";
import { SearchFormComponent } from "@/components/search-form/index.js";
import PubSUb from "@/utils/pubsub.js";

window.addEventListener("load", function (event) {
  console.log("hrllo fhjdhsjk f");
  new SearchFormComponent("app", "afterbegin").render();
  new RandomImageComponent().render();
  new RandomImageComponent().generateImg();
  console.log("welcome to the random image generator app");
  const pubSub = new PubSUb();
});
