import addResultInHTML from "./addResultInHTML.js";
import endTimer from "./endTimer.js";

export default function checkTimer(objTimer, timerId) {
  if (+objTimer.seconds === 0) {
    if (+objTimer.minutes === 0) {
      if (+objTimer.hours === 0) {
        endTimer(objTimer, timerId);
        return;
      } else {
        objTimer.hours--;
        objTimer.minutes = 59;
        objTimer.seconds = 59;
      }
    } else {
      objTimer.minutes--;
      objTimer.seconds = 59;
    }
  } else {
    objTimer.seconds--;
  }
  addResultInHTML(objTimer);
}
