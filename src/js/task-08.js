const input = document.querySelector('.login-form');

function handle(event) { 
  event.preventDefault();
  const {
    elements: { login, password }
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
		return alert("Uzupełnij wszystkie pola formularza!");
	}

	console.log(`E-mail: ${email.value}, Password: ${password.value}`);
	event.currentTarget.reset();
};