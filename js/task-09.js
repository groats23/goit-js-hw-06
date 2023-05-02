function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyOfDoc = document.querySelector('body');
const colorChangeBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

colorChangeBtn.addEventListener('click', onBtnChangeColor);

function onBtnChangeColor() {
  const randomColor = getRandomHexColor();
  colorName.textContent = randomColor;
  bodyOfDoc.style.backgroundColor = randomColor;
}
