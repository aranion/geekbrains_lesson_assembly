// import { DateTime } from "./luxon.js";
import { DateTime } from "luxon";

export function diffDates(firstDate, secondDate) {
  firstDate = DateTime.fromISO(firstDate);
  secondDate = DateTime.fromISO(secondDate);

  if (firstDate > secondDate) [secondDate, firstDate] = [firstDate, secondDate];

  return secondDate.diff(firstDate, ["years", "months", "days"]).toObject();
}

export function diffDateHTML(diff) {
  return `
  <span>
    ${diff.years > 0 ? diff.years + dateName(diff.years, "год") : ""}
    ${diff.months > 0 ? diff.months + dateName(diff.months, "месяц") : ""}
    ${diff.days > 0 ? diff.days + dateName(diff.days, "день") : ""}
    ${diff.years === 0 && diff.months === 0 && diff.days === 0 ? "0 дней" : ""} 
  </span>
  `;
}

function dateName(number, name) {
  const n = number % 10;
  switch (name) {
    case "день":
      switch (n) {
        case 1:
          return " день";
        case 2:
        case 3:
        case 4:
          return " дня";
        default:
          return " дней";
      }
    case "месяц":
      switch (n) {
        case 1:
          return " месяц";
        case 2:
        case 3:
        case 4:
          return " месяца";
        default:
          return " месяцев";
      }
    case "год":
      debugger;
      switch (n) {
        case 1:
          return " год";
        case 2:
        case 3:
        case 4:
          return " года";
        default:
          return " лет";
      }
  }
}
