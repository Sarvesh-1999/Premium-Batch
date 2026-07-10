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
            <button>Edit</button>
            <button>Delete</button>
          </td>
      `;
      tableBody.append(tr);
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getUsers();
});
