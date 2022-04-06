const btnPlus = document.querySelector('button[data-action="increment"]');
const btnMinus = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;
let span = document.querySelector('span');

btnPlus.addEventListener('click', () => {
  counterValue = counterValue + 1;
  span.textContent = counterValue;
});
btnMinus.addEventListener('click', () => {
  counterValuee = counterValue - 1;
  span.textContent = counterValue;
});