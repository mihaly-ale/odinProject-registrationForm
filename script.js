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

