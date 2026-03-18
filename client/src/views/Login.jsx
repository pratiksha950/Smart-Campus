import Input2 from "../components/Input2.jsx"
import Button from "../components/Button.jsx"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import { Link } from "react-router"
import loginImg from "../assets/login.png"
import {useState} from "react"
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx"

function Login() {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: ""
  })

  const checkUserLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/login`,
        loginUser
      )
      console.log(response.data);

      if (response.data.success) {
        toast.success(response.data.message, { id: "loginSuccess" })
        setLoginUser({ email: "", password: "" })

        const { token, data } = response.data;
        localStorage.setItem("userData", JSON.stringify({ ...data, token }));
        localStorage.setItem("userJwtToken", token);
        setTimeout(() => {
          window.location.href = "/";
        }, 1500)

      } else {
        toast.error(response.data.message, { id: "loginFail" })
      }
    } catch (error) {
      toast.error("Server not responding" + error.message)
    }
  }

  return (
    <>
     <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={loginImg}
              alt="login"
              className="h-64 md:h-[511px] w-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-6 sm:p-8">
          

            <p className="text-xs sm:text-sm text-center text-gray-500 mb-6">
              Login to continue to GiftForYou
            </p>

            <form onSubmit={checkUserLogin} className="flex flex-col gap-3 sm:gap-4">

              <Input2
                type="email"
                placeholder="Email"
                autoComplete="off"
                value={loginUser.email}
                onChange={(e) =>
                  setLoginUser({ ...loginUser, email: e.target.value })
                }
                className="border px-3 py-2 rounded w-full"
              />

              <Input2
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                value={loginUser.password}
                onChange={(e) =>
                  setLoginUser({ ...loginUser, password: e.target.value })
                }
                className="border px-3 py-2 rounded w-full"
              />

              <div className="flex justify-center">
                <Button title="Login" type="submit" varient="primary" />
              </div>

              <p className="text-center text-xs sm:text-sm">
                Don't have an account?
                <Link to="/signUp" className="text-purple-600 ml-1 font-semibold">
                  Sign Up
                </Link>
              </p>
              <Toaster />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login
