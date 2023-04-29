const fontSizeAdjustmentInput = document.getElementById('font-size-control');
const textForSizing = document.getElementById('text');

fontSizeAdjustmentInput.addEventListener('input', onFontSizeControl);
function onFontSizeControl(evt) {
  textForSizing.style.fontSize = evt.currentTarget.value + 'px';
}
