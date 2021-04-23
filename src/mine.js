import "./datecalc.js";
import "./timer.js";
import toggleContent from "./navigation.js";

const buttonsElem = document.querySelector(".nav").querySelectorAll("div");
const contentsElem = document.querySelectorAll("form");

buttonsElem.forEach((el) =>
  el.addEventListener("click", () => {
    toggleContent(buttonsElem, el, "active");
    toggleContent(contentsElem, el, "visible");
  })
);
