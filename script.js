const toggleBtn = document.getElementById('toggle-button');
const regForm = document.getElementById('reg-form')
const signinForm = document.getElementById('signin-form')

function changeButtonText () {
  const currentButtonText = this.textContent;
  let message = this.previousElementSibling;

  currentButtonText === "Log in" ?
    (this.textContent = "Create Account", message.textContent = "Don'have an account yet?") :
    (this.textContent = "Log in", message.textContent = "Already have an account?");
}

toggleBtn.addEventListener('click', function () {
  regForm.toggleAttribute("data-invisible")
  signinForm.toggleAttribute("data-invisible")
  changeButtonText.call(this)
})

