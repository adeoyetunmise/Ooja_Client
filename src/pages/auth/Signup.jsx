import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../../contexts/AppContext";
import axios from "axios";

const Signup = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    age: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/signup`, formData);
      localStorage.setItem("user", JSON.stringify(res.data));
      toast.success("Registration successful 👌");
      dispatch({ type: "LOGIN", payload: res.data });
      navigate("/");
    } catch (error) {
      const message = error.response?.data?.message || error.response?.data?.error || "An error occurred";
      toast.error(message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-8">
      {/* Header Section */}
      <header className="flex justify-between items-center py-4  sm:px-8 lg:px-20">
        <div className="flex items-center">
          <img src="/svgs/buy.svg" alt="Ooja logo" className="w-16 sm:w-20" />
          <h2 className="font-iceberg text-3xl sm:text-4xl text-black">Ooja</h2>
        </div>
        <nav>
          <Link
            to="/login"
            className="bg-rose-600 text-white py-2 px-3 sm:py-3 sm:px-5 rounded-md font-bold text-sm sm:text-base"
          >
            Login
          </Link>
        </nav>
      </header>

      {/* Signup Form Section */}
      <div className="flex justify-center items-center py-10 -mt-8 sm:py-20">
        <form
          className="w-full max-w-md md:max-w-lg bg-slate-700 p-6 sm:p-8 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-3xl font-semibold mb-6 text-white">Sign Up</h2>

          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-white">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 text-sm"
                placeholder="Enter first name"
                aria-label="First Name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-white">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 text-sm"
                placeholder="Enter last name"
                aria-label="Last Name"
              />
            </div>
          </div>

          {/* Username and Age */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="userName" className="block text-white">
                Username
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 text-sm"
                placeholder="Enter username"
                aria-label="Username"
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-white">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 text-sm"
                placeholder="Enter age"
                aria-label="Age"
              />
            </div>
          </div>

          {/* Email and Password */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 text-sm"
                placeholder="Enter email"
                aria-label="Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 text-sm"
                placeholder="Enter password"
                aria-label="Password"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-6 py-3 rounded-lg text-white font-bold ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-rose-500 hover:bg-rose-600"
            }`}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>

          <p className="text-center mt-4 text-white">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-300 font-bold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
