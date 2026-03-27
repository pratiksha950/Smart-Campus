import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import campus from "../assets/hero.jpg";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-[#F8FAFF] font-sans py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          
          <div className="text-center md:text-left">
            <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-4">
              Smart Campus Management System
            </h1>

            <p className="text-gray-600 text-sm sm:text-base mb-6">
              A modern solution to manage students, faculty, attendance,
              academics, and campus activities efficiently.
            </p>

            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              onClick={() => navigate("/SignUp")}
            >
              SignUp Now...
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src={campus}
              alt="Campus"
              className="rounded-xl shadow-md w-full max-w-md md:max-w-full"
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-[#F8FAFF] font-sans py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-center mb-10 text-gray-800">
            System Features
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {/* 📤 Upload Material */}
            <div
              onClick={() => navigate("/NewMaterial")}
              className="group cursor-pointer bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                📤
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                Upload Material
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                Add notes, PYQs, and study resources for students.
              </p>

              <button className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm opacity-0 group-hover:opacity-100 transition">
                Upload Now
              </button>
            </div>

            {/* 📚 View Materials */}
            <div
              onClick={() => navigate("/StudyMaterial")}
              className="group cursor-pointer bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                📚
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600">
                View Materials
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                Browse and download study materials easily.
              </p>

              <button className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm opacity-0 group-hover:opacity-100 transition">
                Explore
              </button>
            </div>

            {/* 👤 Profile */}
            <div
              onClick={() => navigate("/profile")}
              className="group cursor-pointer bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                👤
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600">
                Manage Profile
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                Update your details and manage your account.
              </p>

              <button className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm opacity-0 group-hover:opacity-100 transition">
                Open Profile
              </button>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;