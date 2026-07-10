const updateForm = document.querySelector("#update-form");
const fullNameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");



async function getEditUser() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  try {
    let resp = await fetch(`http://localhost:5000/users/${id}`);
    let data = await resp.json();
    console.log(data);

    fullNameInput.value = data.fullname;
    emailInput.value = data.email;
    passwordInput.value = data.password;
  } catch (error) {
    console.log(error);
    alert("unable to get editUser");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getEditUser();
});

updateForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const updatedUserData = {
    fullname: fullNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  const payload = JSON.stringify(updatedUserData);

  try {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    await fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      body: payload,
      headers: {
        "content-type": "application/json",
      },
    });

    window.location.href = "Users.html";

    alert("user updated");
  } catch (error) {
    console.log(error);
    alert("unable to update");
  }
});
