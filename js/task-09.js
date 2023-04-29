const bodyOfDoc = document.querySelector('body');
const colorName = document.querySelector('.color');
const colorChangeBtn = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

colorChangeBtn.addEventListener('click', onBtnChangeColor);
function onBtnChangeColor() {
  colorName.textContent = getRandomHexColor();
  bodyOfDoc.style.backgroundColor = getRandomHexColor();
}
