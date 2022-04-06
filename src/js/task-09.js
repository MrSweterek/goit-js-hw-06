function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector('button');
const span = document.querySelector('.color');
const bdy = document.querySelector('body');

btn.addEventListener('click', () => {
  bdy.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
});