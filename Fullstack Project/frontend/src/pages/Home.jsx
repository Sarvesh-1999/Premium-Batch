import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 mt-10">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800">
            User Management System
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Manage your users effortlessly. Create new users, view all users,
            update their information, and delete records with a clean and modern
            interface.
          </p>

          <div className="mt-10 flex justify-center gap-5 flex-wrap">
            <Link
              to="/create-user"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg transition"
            >
              Create User
            </Link>

            <Link
              to="/all-users"
              className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-xl transition"
            >
              View Users
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <div className="text-5xl mb-4">➕</div>

            <h2 className="text-2xl font-semibold text-gray-800">
              Create Users
            </h2>

            <p className="mt-3 text-gray-600">
              Easily add new users with their personal information using a clean
              and responsive form.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <div className="text-5xl mb-4">👥</div>

            <h2 className="text-2xl font-semibold text-gray-800">
              Manage Users
            </h2>

            <p className="mt-3 text-gray-600">
              Browse all users in beautiful cards and access their information
              anytime.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <div className="text-5xl mb-4">⚡</div>

            <h2 className="text-2xl font-semibold text-gray-800">
              Fast & Responsive
            </h2>

            <p className="mt-3 text-gray-600">
              Built with React, Axios, JSON Server, and Tailwind CSS for a
              smooth and modern user experience.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20">
          <div className="bg-indigo-600 text-white rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-4xl font-bold">100%</h3>
            <p className="mt-2">Responsive Design</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-indigo-600">CRUD</h3>
            <p className="mt-2 text-gray-600">Operations Supported</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-indigo-600">React</h3>
            <p className="mt-2 text-gray-600">Powered Application</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;