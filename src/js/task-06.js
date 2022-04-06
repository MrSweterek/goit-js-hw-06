const input = document.querySelector('input');

const check = () => {
  if (input.value.length.toString() === input.dataset.length) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  }
  else {
    input.classList.remove('valid');
    input.classList.add('invalid');
   }
};

input.addEventListener('blur', check);