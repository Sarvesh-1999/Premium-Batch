import React, { useEffect, useState } from "react";
import { AxiosInstance } from "../services/axiosIntance";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function getAllUsers() {
      try {
        const resp = await AxiosInstance.get("/users");
        setAllUsers(resp.data);
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    }

    getAllUsers();
  }, [handleDeleteUser]);

  async function handleDeleteUser(id) {
    try {
      await AxiosInstance.delete(`/users/${id}`);
      toast.success("User Deleted");
    } catch (error) {
      console.log(error);
      toast.error("unable to delete");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        All Users
      </h1>

      {allUsers.length === 0 ? (
        <p className="text-center text-gray-500">No users found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-indigo-500 text-white flex items-center justify-center text-2xl font-bold">
                  {user.firstname.charAt(0).toUpperCase()}
                </div>
              </div>

              {/* Name */}
              <h2 className="text-xl font-semibold text-center text-gray-800">
                {user.firstname} {user.lastname}
              </h2>

              {/* Details */}
              <div className="mt-5 space-y-2 text-gray-600">
                <p>
                  <span className="font-semibold">📧 Email:</span> {user.email}
                </p>

                <p>
                  <span className="font-semibold">👤 Gender:</span>{" "}
                  <span className="capitalize">{user.gender}</span>
                </p>

                <p>
                  <span className="font-semibold">📅 DOJ:</span> {user.doj}
                </p>

                <p>
                  <span className="font-semibold">🆔 ID:</span> {user.id}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-6 flex justify-between">
                <Link
                  to={`/edit-user/${user.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-white px-4 py-2 rounded-lg transition"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-4 py-2 rounded-lg transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
