export default function toggle(arrElem, elemActive, className) {
  arrElem.forEach((el) => {
    el.classList.remove(className);
    if (
      elemActive.dataset.name === el.dataset.name ||
      elemActive.dataset.name === el.id
    ) {
      el.classList.add(className);
    }
  });
}

// export function toggleActiveButton(name) {
//   buttonsElem.forEach((el) => {
//     el.classList.remove("active");
//     if (name.dataset.name === el.dataset.name) {
//       el.classList.add("active");
//     }
//   });
// }

// export function toggleContent(name) {
//   navElem.forEach((el) => {
//     el.classList.remove("visible");
//     if (name.dataset.name === el.id) {
//       el.classList.add("visible");
//     }
//     toggleActiveButton(name);
//   });
// }
