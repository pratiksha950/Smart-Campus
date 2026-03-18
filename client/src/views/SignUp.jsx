import { useState } from "react";
import Input2 from "../components/Input2.jsx";
import Button from "../components/Button.jsx";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import signupImg from "../assets/signUP.png";
import Footer from "../components/Footer.jsx";

function SignUp() {

  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    country: "",
    password: "",
  });

  const createUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/signUp`,
        newUser
      );

      if (response.data.success) {
        toast.success(response.data.message, { id: "signupSuccess" });

        setNewUser({
          name: "",
          email: "",
          mobile: "",
          city: "",
          country: "",
          password: "",
        });

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        toast.error(response.data.message, { id: "signuperror" });
      }
    } catch (error) {
      toast.error("Server not responding: " + error.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={signupImg}
              alt="signup"
              className="h-64 md:h-[560px] w-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-6 sm:p-8">
            <Heading text="Create Account" />

            <p className="text-xs sm:text-sm text-center text-gray-500 mb-6">
              Join GiftForYou and start shopping
            </p>

            <form onSubmit={createUser} className="flex flex-col gap-3 sm:gap-4">

              <Input2
                type="text"
                placeholder="Full Name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                className="border px-3 py-2 rounded w-full"
              />

              <Input2
                type="email"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                className="border px-3 py-2 rounded w-full"
              />

              <Input2
                type="text"
                placeholder="Mobile"
                value={newUser.mobile}
                onChange={(e) => setNewUser({ ...newUser, mobile: e.target.value })}
                className="border px-3 py-2 rounded w-full"
              />

              <Input2
                type="text"
                placeholder="City"
                value={newUser.city}
                onChange={(e) => setNewUser({ ...newUser, city: e.target.value })}
                className="border px-3 py-2 rounded w-full"
              />

              <Input2
                type="text"
                placeholder="Country"
                value={newUser.country}
                onChange={(e) => setNewUser({ ...newUser, country: e.target.value })}
                className="border px-3 py-2 rounded w-full"
              />

              <Input2
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                className="border px-3 py-2 rounded w-full"
              />

              <div className="flex justify-center">
                <Button title="Sign Up" type="submit" varient="primary" />
              </div>

              <p className="text-center text-xs sm:text-sm">
                Already have an account?
                <Link to="/login" className="text-purple-600 ml-1 font-semibold">
                  Login
                </Link>
              </p>

              <Toaster />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
