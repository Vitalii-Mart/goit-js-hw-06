const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === `` || password.value === ``) {
    return alert("Всі поля повинні бути заповнені!");
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);

  e.currentTarget.reset();
});

// const valueImput = {
//   email: email.value,
//   password: password.value,
// };

// console.log(valueImput);

// const formData = new FormData(e.currentTarget);

// formData.forEach((value, name) => {
//   console.log("name", name);
//   console.log("value", value);
// });}
