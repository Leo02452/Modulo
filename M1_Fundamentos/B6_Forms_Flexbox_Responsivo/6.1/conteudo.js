// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', function pDLink(event) {
  event.preventDefault();
})

INPUT_CHECKBOX.addEventListener('click', function pDCheckbox(event) {
  event.preventDefault();
})

INPUT_TEXT.addEventListener('keypress', function pDText(event) {
  event.key;
  event.preventDefault();
})
