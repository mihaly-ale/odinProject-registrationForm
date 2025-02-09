// Form toggle
const toggleBtn = document.getElementById('toggle-button');
const regForm = document.getElementById('reg-form');
const signinForm = document.getElementById('signin-form');

function changeButtonText() {
	const currentButtonText = this.textContent;
	let message = this.previousElementSibling;

	currentButtonText === 'Log in'
		? ((this.textContent = 'Create Account'),
		  (message.textContent = "Don't have an account yet?"))
		: ((this.textContent = 'Log in'),
		  (message.textContent = 'Already have an account?'));
}

function displaySignInform() {
	signinForm.setAttribute('data-invisible', 'false');
	regForm.setAttribute('data-invisible', 'true');
}

function displayRegform() {
	signinForm.setAttribute('data-invisible', true);
	regForm.setAttribute('data-invisible', false);
}

toggleBtn.addEventListener('click', function () {
	signinForm.dataset.invisible === 'true'
		? displaySignInform()
		: displayRegform();

	changeButtonText.call(this);
});

// Form submission
const regFormSubmitBtn = document.querySelector('#reg-form-submit');
const nameInput = document.querySelector('#full-name');
const signinFormSubmitBtn = document.querySelector('#signin-form-submit');

regFormSubmitBtn.addEventListener('click', (e) => {
	const isFormValid = regForm.reportValidity();

	if (!isFormValid) {
		e.preventDefault();
		console.log('Form is invalid');
	} else {
		if (passwordMatchCheck() === true) {
			console.log(`Successful submission.`);
		}
		regForm.submit();
	}
});

function passwordMatchCheck() {
	const regPassword = document.getElementById('reg-password');
	const confirmRegPassword = document.getElementById('confirm-reg-password');

	if (regPassword.value === confirmRegPassword.value) {
		return true;
	}
}

