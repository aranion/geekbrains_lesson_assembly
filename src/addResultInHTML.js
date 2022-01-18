const dateTimerResult = document.querySelector("#dateTimerResult");

export default function addResultInHTML(objTimer, text) {
  if (text) {
    dateTimerResult.innerHTML = text;
  } else {
    dateTimerResult.innerHTML =
      +objTimer.hours +
      "ч., " +
      +objTimer.minutes +
      "м., " +
      +objTimer.seconds +
      "с.";
  }
}
