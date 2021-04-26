import "./src/style/style.css";

import "./src/datecalc.js";
import "./src/timer.js";
import toggleContent from "./src/navigation.js";

const buttonsElem = document.querySelector(".nav").querySelectorAll("div");
const contentsElem = document.querySelectorAll("form");

buttonsElem.forEach((el) =>
  el.addEventListener("click", () => {
    toggleContent(buttonsElem, el, "active");
    toggleContent(contentsElem, el, "visible");
  })
);
