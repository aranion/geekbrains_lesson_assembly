import { DateTime } from "./luxon.js";

export function diffDates(firstDate, secondDate) {
  firstDate = DateTime.fromISO(firstDate);
  secondDate = DateTime.fromISO(secondDate);

  if (firstDate > secondDate) [secondDate, firstDate] = [firstDate, secondDate];

  return secondDate.diff(firstDate, ["years", "months", "days"]).toObject();
}

export function diffDateHTML(diff) {
  return `
  <span>
    Лет: ${diff.years},
    Месяцев: ${diff.months},
    Дней: ${diff.days}
  </span>
  `;
}
