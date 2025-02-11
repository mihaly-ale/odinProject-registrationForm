// Form toggle
const toggleBtns = document.querySelectorAll('[data-toggle-target');
const regForm = document.getElementById('reg-form');
const signinForm = document.getElementById('signin-form');

toggleBtns.forEach((button) => {
	button.addEventListener('click', () => {
		button.dataset.toggleTarget === 'signin-form'
			? displaySignInform(button)
			: displayRegform(button);
	});
});

function displaySignInform(activeToggleButton) {
	const activeToggleButtonWrapper = activeToggleButton.parentElement;
	const hiddenToggle = signinForm.nextElementSibling;

	signinForm.setAttribute('data-invisible', 'false');
	hiddenToggle.setAttribute('data-invisible', 'false');

	regForm.setAttribute('data-invisible', 'true');
	activeToggleButtonWrapper.setAttribute('data-invisible', 'true');
}
function displayRegform(activeToggleButton) {
	const activeToggleButtonWrapper = activeToggleButton.parentElement;
	const hiddenToggle = regForm.nextElementSibling;

	regForm.setAttribute('data-invisible', 'false');
	hiddenToggle.setAttribute('data-invisible', 'false');

	signinForm.setAttribute('data-invisible', 'true');
	activeToggleButtonWrapper.setAttribute('data-invisible', 'true');
}

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

