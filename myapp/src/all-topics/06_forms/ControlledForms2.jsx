import React, { useState } from "react";

const ControlledForms2 = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (!formData.email.trim() || !formData.password.trim()) {
      alert("all fields are required");
      return;
    }

    let newUser = {
      ...formData,
      id: Math.random(),
    };

    setUsers((prev) => [...prev, newUser]);

    setFormData({ email: "", password: "" });
  };

  return (
    <div>
      <h1>ControlledForms 2</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>
      </form>

      {users.length > 0 ? users.map((user) => {
        return (
            <div key={user.id}>
                <h4>Email : {user.email}</h4>
                <h4>Password : {user.password}</h4>
            </div>
        )
      }) : <p>No Users</p>}
    </div>
  );
};

export default ControlledForms2;
