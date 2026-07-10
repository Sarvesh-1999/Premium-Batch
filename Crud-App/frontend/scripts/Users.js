const tableBody = document.querySelector("#users-table-body");

async function getUsers() {
  try {
    let resp = await fetch("http://localhost:5000/users");
    let data = await resp.json();
    // console.log(data);
    displayUsers(data);
  } catch (error) {
    console.log(error);
    alert("unable to fetch users");
  }
}

function displayUsers(users = []) {
  if (users.length === 0) {
    tableBody.innerHTML = `
    <tr>
      <td colspan='4'>No Users Available</td>
    </tr>
    `;
  } else {
    users.forEach((ele) => {
      let { id, email, fullname } = ele;
      const tr = document.createElement("tr");
      tr.innerHTML = `
          <td>${id}</td>
          <td>${fullname}</td>
          <td>${email}</td>
          <td>
            <button onclick='editUser(${id})'>Edit</button>
            <button onclick='deleteUser(${id})'>Delete</button>
          </td>
      `;
      tableBody.append(tr);
    });
  }
}

async function deleteUser(id) {
  try {
    await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    });
    alert("user deleted");
  } catch (error) {
    console.log(error);
    alert("unable to delete");
  }
}

function editUser(id) {
  console.log("edit id", id);
  window.location.href = `EditUser.html?id=${id}`
}

window.addEventListener("DOMContentLoaded", () => {
  getUsers();
});
