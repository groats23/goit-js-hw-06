const inputArea = document.getElementById('validation-input');

inputArea.addEventListener('blur', handleInputFocusLost);
function handleInputFocusLost() {
  if (inputArea.value.length === 0) {
    inputArea.removeAttribute('class');
  } else if (inputArea.value.length === Number(inputArea.dataset.length)) {
    inputArea.classList.add('valid');
    inputArea.classList.remove('invalid');
  } else {
    inputArea.classList.add('invalid');
    inputArea.classList.remove('valid');
  }
}
