import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import campus from "../assets/hero.jpg";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
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
              onClick={() => navigate("/login")}
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

     
      <section className="bg-[#F8FAFF] font-sans py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-center mb-10 text-gray-800">
            System Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            
         
    

          
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
