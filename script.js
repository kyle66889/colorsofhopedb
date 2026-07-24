const form = document.querySelector('#color-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.style.display = 'none';
    document.querySelector('#success-message').classList.add('visible');
  });
}
