import addResultInHTML from "./addResultInHTML.js";
import "./howler.js";

const buttonStartTimer = document.querySelector("#startTimer");
const signal = new Howl({
  urls: ["./src/sound/signal.wav"],
});

export default function endTimer(objTimer, timerId) {
  addResultInHTML(objTimer, "Время истекло!");
  clearInterval(timerId);
  buttonStartTimer.innerText = "Cтарт";
  signal.play();
}
