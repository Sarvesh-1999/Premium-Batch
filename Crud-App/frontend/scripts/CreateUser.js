const createForm = document.querySelector("#create-form");

createForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullNameInput = document.querySelector("#fullname");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  const newUser = {
    fullname: fullNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  console.log(newUser);

  const payload = JSON.stringify(newUser);
  console.log(payload);

  try {
    let resp = await fetch("http://localhost:5000/users", {
      method: "POST",
      body: payload,
      headers: {
        "content-type": "application/json",
      },
    });

    console.log(resp);
    alert("user created");

  } catch (error) {
    console.log(error);
    alert("unable to create user");
  }

  fullNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
});
