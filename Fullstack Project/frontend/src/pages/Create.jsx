import React, { useState } from "react";
import { AxiosInstance } from "../services/axiosIntance";

const Create = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    doj: "",
    gender: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AxiosInstance.post("/users", formData);
      alert("User Created");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        doj: "",
        gender: "",
      });
    } catch (error) {
      alert("unable to create user");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold pb-5">Create a User</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">Firstname</label>
        <input
          value={formData.firstname}
          onChange={handleChange}
          className="border"
          type="text"
          name="firstname"
          id="firstname"
        />

        <label htmlFor="lastname">Lastname</label>
        <input
          value={formData.lastname}
          onChange={handleChange}
          className="border"
          type="text"
          name="lastname"
          id="lastname"
        />

        <label htmlFor="email">Email</label>
        <input
          value={formData.email}
          onChange={handleChange}
          className="border"
          type="email"
          name="email"
          id="email"
        />

        <label htmlFor="password">Password</label>
        <input
          value={formData.password}
          onChange={handleChange}
          className="border"
          type="password"
          name="password"
          id="password"
        />

        <label htmlFor="gender">Gender</label>
        <label htmlFor="male">male</label>
        <input
          onChange={handleChange}
          className="border"
          type="radio"
          name="gender"
          id="male"
          checked={formData.gender === "male" ? true : false}
          value={"male"}
        />

        <label htmlFor="female">female</label>
        <input
          onChange={handleChange}
          className="border"
          type="radio"
          name="gender"
          checked={formData.gender === "female" ? true : false}
          id="female"
          value={"female"}
        />

        <label htmlFor="others">others</label>
        <input
          onChange={handleChange}
          className="border"
          type="radio"
          name="gender"
          checked={formData.gender === "others" ? true : false}
          id="others"
          value={"others"}
        />

        <label htmlFor="doj">Date of joining</label>
        <input
          className="border"
          type="date"
          name="doj"
          id="doj"
          value={formData.doj}
          onChange={handleChange}
        />

        <button>Create</button>
      </form>
    </div>
  );
};

export default Create;
