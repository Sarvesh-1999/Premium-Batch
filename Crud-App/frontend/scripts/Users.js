const tableBody = document.querySelector("#users-table-body");

async function getUsers() {
  try {
    let resp = await fetch("http://localhost:5000/users");
    let data = await resp.json();
    console.log(data);
    displayUsers(data);
  } catch (error) {
    console.log(error);
    alert("unable to fetch users");
  }
}

function displayUsers(users) {
  console.log(users);
}

window.addEventListener("DOMContentLoaded", () => {
  getUsers();
});
