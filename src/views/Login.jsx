import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import loginImage from "../assets/login-side.jpg";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No user found. Please sign up first.");
      navigate("/signup");
      return;
    }

    if (
      loginData.email === savedUser.email &&
      loginData.password === savedUser.password &&
      loginData.role === savedUser.role
    ) {
      alert("Login successful!");
      if (loginData.role === "student") navigate("/student");
      if (loginData.role === "faculty") navigate("/faculty");
      if (loginData.role === "admin") navigate("/admin");
    } else {
      alert("Invalid credentials or role mismatch");
    }
  };

  return (
    <>
      <Navbar />

      {/* Main Wrapper */}
      <div className="min-h-screen flex flex-col md:flex-row">

        {/* Left Image Section */}
        <div className="hidden md:flex md:w-1/2">
          <img
            src={loginImage}
            alt="Campus"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100 px-4 py-12">
          <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 sm:p-8">

            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
              Login to Smart Campus
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <select
                name="role"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
                <option value="admin">Admin</option>
              </select>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Login
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-5">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-600 font-medium hover:underline">
                Sign Up
              </Link>
            </p>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
