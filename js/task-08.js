const userLoginForm = document.querySelector('.login-form');

userLoginForm.addEventListener('submit', onLoginBtnClick);
function onLoginBtnClick(evt) {
  evt.preventDefault();

  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (email.value === '' && password.value === '') {
    alert('Please, fill in empty fields!');
  } else if (email.value === '') {
    alert('Please, enter your email!');
  } else if (password.value === '') {
    alert('Please, enter your password!');
  } else {
    const formData = { email: email.value, password: password.value };
    console.log('formData: ', formData);
    evt.currentTarget.reset();
  }
}
