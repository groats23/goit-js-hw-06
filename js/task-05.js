const inputPlaceForName = document.getElementById('name-input');
const outputAreaForName = document.getElementById('name-output');

inputPlaceForName.addEventListener('input', handleNameInput);
function handleNameInput(event) {
  if (inputPlaceForName.value === '') {
    outputAreaForName.textContent = 'Anonymous';
  } else {
    outputAreaForName.textContent = event.currentTarget.value;
  }
}
