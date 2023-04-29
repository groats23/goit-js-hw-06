const boxesAmountInput = document.querySelector('[type="number"]');
const boxesCreateBtn = document.querySelector('[data-create]');
const boxesDestroyBtn = document.querySelector('[data-destroy]');
const boxForBoxes = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

boxesCreateBtn.addEventListener('click', createBoxes);
function createBoxes() {
  boxForBoxes.innerHTML = '';
  const boxesArray = [];

  for (let i = 1; i <= boxesAmountInput.value; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.width = i * 10 + 20 + 'px';
    boxEl.style.height = i * 10 + 20 + 'px';
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.border = '1px solid black';
    boxEl.style.borderRadius = '5%';
    boxEl.style.marginTop = '10px';

    boxesArray.push(boxEl);
  }

  boxForBoxes.append(...boxesArray);
}

boxesDestroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxForBoxes.innerHTML = '';
  boxesAmountInput.value = '';
}
