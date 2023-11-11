function emailValidation() {
  const form = document.getElementById('form');
  const emailInput = form.email;
  const emailConfirmInput = form.email_confirm;
  const emailError = document.getElementById('emailError');

  emailConfirmInput.addEventListener('input', () => {
    if (emailInput.value !== emailConfirmInput.value) {
      emailError.textContent = 'Correo electrónico no coincidente.';
      emailConfirmInput.classList.add('error'); // Aplica la clase 'error' al campo
    } else {
      emailError.textContent = '';
      emailConfirmInput.classList.remove('error'); // Quita la clase 'error' del campo
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (emailInput.value !== emailConfirmInput.value) {
      emailError.textContent = 'Correo electrónico no coincidente.';
      emailConfirmInput.classList.add('error'); // Aplica la clase 'error' al campo
    } else {
      emailError.textContent = '';
      emailConfirmInput.classList.remove('error'); // Quita la clase 'error' del campo
      form.submit();
    }
  });
}

window.onload = emailValidation;
