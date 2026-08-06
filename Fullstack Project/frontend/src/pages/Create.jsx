import React, { useState } from "react";
import { AxiosInstance } from "../services/axiosIntance";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AxiosInstance.post("/users", formData);
      toast.success("User Created");
      
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        doj: "",
        gender: "",
      });

      navigate("/all-users")

    } catch (error) {
      toast.error("unable to create user");
    }
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 mt-15">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Create User
        </h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                First Name
              </label>
              <input
                value={formData.firstname}
                onChange={handleChange}
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter first name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Last Name
              </label>
              <input
                value={formData.lastname}
                onChange={handleChange}
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter last name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              Email
            </label>
            <input
              value={formData.email}
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              value={formData.password}
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium mb-3 text-gray-700">
              Gender
            </label>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  className="accent-indigo-600"
                />
                <span>Male</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  className="accent-pink-500"
                />
                <span>Female</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="others"
                  checked={formData.gender === "others"}
                  onChange={handleChange}
                  className="accent-green-500"
                />
                <span>Others</span>
              </label>
            </div>
          </div>

          {/* Date */}
          <div>
            <label
              htmlFor="doj"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              Date of Joining
            </label>
            <input
              value={formData.doj}
              onChange={handleChange}
              type="date"
              name="doj"
              id="doj"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-xl"
          >
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
