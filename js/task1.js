const loginFormEle = document.querySelector("#loginForm");

loginFormEle.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form Submitted");

  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  const loginUser = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  console.log(loginUser);

  //! SAVE DATA IN LOCAL STORAGE
  const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
  savedUsers.push(loginUser); 
  localStorage.setItem("users", JSON.stringify(savedUsers));

  emailInput.value = "";
  passwordInput.value = "";
});
