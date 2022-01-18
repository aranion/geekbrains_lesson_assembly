import { formatError } from "./common.js";
import { diffDates, diffDateHTML } from "./diffDates.js";

const dateCalcForm = document.querySelector("#dateCalc");
const dateCalcResult = document.querySelector("#dateCalcResult");

dateCalcForm.addEventListener("submit", handleCalcDate);

function handleCalcDate(event) {
  event.preventDefault();
  dateCalcResult.innerHTML = "";

  let {
    firstDateId: firstDate,
    secondDateId: secondDate,
  } = event.target.elements;
  firstDate = firstDate.value;
  secondDate = secondDate.value;

  if (firstDate && secondDate)
    dateCalcResult.innerHTML = diffDateHTML(diffDates(firstDate, secondDate));
  else
    dateCalcResult.innerHTML = formatError(
      "Для расчета промежутка необходимо заполнить оба поля"
    );
}
