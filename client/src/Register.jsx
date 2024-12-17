import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const handleData = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-yellow-700 p-14 rounded-lg shadow-lg">
        <form onSubmit={handleData} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="User name"
            required
            className="p-2 rounded border border-gray-300"
          />
          <br />
          <input
            type="email"
            placeholder="E-mail"
            required
            className="p-2 rounded border border-gray-300"
          />
          <br />
          <input
            type="password"
            placeholder="Enter Your Password"
            required
            className="p-2 rounded border border-gray-300"
          />
          <br />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
