const fontSizeAdjustmentInput = document.getElementById('font-size-control');
const textForSizing = document.getElementById('text');

// Встановлюємо початкове значення розміру шрифту:
textForSizing.style.fontSize = fontSizeAdjustmentInput.value + 'px';

fontSizeAdjustmentInput.addEventListener('input', onFontSizeControl);

function onFontSizeControl(evt) {
  textForSizing.style.fontSize = evt.currentTarget.value + 'px';
}
