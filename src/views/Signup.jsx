import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import signupImage from "../assets/signup-side.jpg";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <>
      <Navbar />

      {/* Main Wrapper */}
      <div className="min-h-screen flex flex-col md:flex-row">

        {/* Left Image */}
        <div className="hidden md:flex md:w-1/2">
          <img
            src={signupImage}
            alt="Signup"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100 px-4 py-12">
          <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 sm:p-8">

            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
              Create Your Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />

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

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
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
                Sign Up
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-5">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-medium hover:underline"
              >
                Login
              </Link>
            </p>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
