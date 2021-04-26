import addResultInHTML from "./addResultInHTML.js";
import how from "howler";

const buttonStartTimer = document.querySelector("#startTimer");
const signal = new how.Howl({
  src: ["./sound/signal.wav"],
});

export default function endTimer(objTimer, timerId) {
  addResultInHTML(objTimer, "Время истекло!");
  clearInterval(timerId);
  buttonStartTimer.innerText = "Cтарт";
  signal.play();
}
