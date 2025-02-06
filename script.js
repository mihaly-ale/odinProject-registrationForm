const toggleBtn = document.getElementById('toggle-button');
const regForm = document.getElementById('reg-form')
const signinForm = document.getElementById('signin-form')

toggleBtn.addEventListener('click', function () {
  regForm.toggleAttribute("data-invisible")
  signinForm.toggleAttribute("data-invisible")
})

