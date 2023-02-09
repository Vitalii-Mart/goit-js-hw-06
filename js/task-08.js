const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  console.log(`Email: ${email.value}, Password: ${password.value}`);

  if (email.value === `` || password.value === ``) {
    alert("Всі поля повинні бути заповнені!");
  }
  e.currentTarget.reset();
});
