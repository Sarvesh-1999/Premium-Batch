import React, { useState } from "react";

const ControlledForms1 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");

    const newUser = { username, email, password };
    console.log(newUser);

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Learn ControlledForms 1</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          required
          placeholder="Enter Username"
          value={username}
          onChange={handleUsername}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Enter Email"
          value={email}
          onChange={handleEmail}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="Enter Password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ControlledForms1;
