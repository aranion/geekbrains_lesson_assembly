import checkTimer from "./checkTimer.js";
import addResultInHTML from "./addResultInHTML.js";

const dateTimerForm = document.querySelector("#timer");
const buttonStartTimer = document.querySelector("#startTimer");
let checkButtonStart = false;
let timerId = null;

dateTimerForm.addEventListener("submit", startTimerDate);

function startTimerDate(event) {
  event.preventDefault();

  if (checkButtonStart) {
    buttonStartTimer.innerText = "Cтарт";
    checkButtonStart = !checkButtonStart;
    clearInterval(timerId);
    addResultInHTML({}, "Введите время!");
  } else {
    buttonStartTimer.innerText = "Cтоп";
    checkButtonStart = !checkButtonStart;
    const { dateTimer } = event.target.elements;
    let [hours = 0, minutes = 0, seconds = 0] = dateTimer.value.split(":");
    const objTimer = { hours, minutes, seconds };

    addResultInHTML(objTimer);

    timerId = setInterval(() => checkTimer(objTimer, timerId), 1000);
  }
}
