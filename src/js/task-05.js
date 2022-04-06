let input = document.querySelector('input');
let output = document.querySelector('span');

input.addEventListener('input', (event) => { 
  if (input == ""|| input == null){ output.textContent = "Anonymous"}
  else {output.textContent = event.currentTarget.value}
});