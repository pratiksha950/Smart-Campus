import { GraduationCap, Users, GlobeLock } from "lucide-react";
import { PRINCIPLE_DATA } from "./../configs/aboutus/principle.js";
import { REVIEW_DATA } from "./../configs/aboutus/review.js";
import Review from "./../components/Aboutus/Review.jsx";
import Principle from "./../components/Aboutus/Principle.jsx"
import CollegeImage from './../assets/collegess.jpg';
import Button from './../components/Button.jsx'
import { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Quizapp from "../components/Aboutus/Quizapp.jsx";

function About() {

  const [addReview, setAddReview] = useState({
    name: "",
    rating: "",
    message: "",
    error: ""
  });

  const addedReview = () => {
    if (!addReview.name) {
      toast.error("Enter your Name");
      return;
    } if (addReview.rating < 1 || addReview.rating > 5) {
      toast.error("Rating must be between 1 and 5")
      return;
    }

    localStorage.setItem("userData", JSON.stringify(addReview));


    toast.success("Enquiry submit Successfully 🎉");


    setAddReview({
      name: "",
      rating: "",
      message: "",
      error: ""
    })
  }

  useEffect(() => {
    if (addReview.name.length > 0 && addReview.name.length < 6) {
      setAddReview({ ...addReview, error: "Name must be 6 character long" })
    } else {
      setAddReview({ ...addReview, error: "" })
    }

  }, [addReview.name]);

  return (
    <>
    <Navbar />
    <div className="text-xl bg-[#F8FAFF] font-sans">

     
      <div style={{
        backgroundImage: `url(${CollegeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: "400px",
        objectFit:"cover",
        backgroundSsize: "cover"
      }}>

        <p className="text-center text-white md:text-3xl text-2xl font-semibold max-w-4xl m-auto md:pt-20 pt-5">
          Smart Campus is a modern digital platform designed to simplify campus
          management and improve communication between students, faculty, and
          administration.

          Smart Campus modernizes traditional campus systems by providing a
          centralized platform where academic and administrative information
          can be accessed easily and securely.
        </p>
      </div>


      <div className="md:flex my-15 ">
        <div className="bg-white p-6 rounded-xl shadow mx-10 mb-5">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-2">
            <GraduationCap strokeWidth={1.75} /> Our Mission
          </h2>
          <p className="text-gray-700">
            Our mission is to simplify campus operations using technology that
            improves efficiency, transparency, and accessibility.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow mx-10">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-2">
            <Users className="w-6 h-6" /> Our Vision
          </h2>
          <p className="text-gray-700">
            We envision a smart and connected campus ecosystem that empowers
            education through seamless digital solutions.
          </p>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-8 text-center">Campus Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-2xl shadow">
            <h3 className="text-3xl font-bold">6+</h3>
            <p className="text-gray-600">Departments</p>
          </div>
          <div className="p-6 rounded-2xl shadow">
            <h3 className="text-3xl font-bold">2000+</h3>
            <p className="text-gray-600">Students</p>
          </div>
          <div className="p-6 rounded-2xl shadow">
            <h3 className="text-3xl font-bold">150+</h3>
            <p className="text-gray-600">Faculty Members</p>
          </div>
          <div className="p-6 rounded-2xl shadow">
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="text-gray-600">Digital Access</p>
          </div>
        </div>
      </div>


<div>
  <h1 className="text-2xl font-semibold text-center mb-1">Our Principle</h1>
      <div>
        {
          PRINCIPLE_DATA.map((obj) => {
            const { id,name, designation, message, qualification1, qualification2 } = obj;
            return (
              <Principle
              id={id}
                name={name}
                designation={designation}
                message={message}
                qualification1={qualification1}
                qualification2={qualification2}
              />
            )
          })
        }
      </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-center ">Student Reviews</h2>
        <div className="flex justify-center flex-wrap">
          {
            REVIEW_DATA.map((obj) => {
              const { id, name, rating, text, imageUrl } = obj;
              return (
                <Review
                  id={id}
                  name={name}
                  rating={rating}
                  text={text}
                  imageUrl={imageUrl}
                />
              )
            })
          }
        </div>
      </div>

      <h1 className="text-2xl font-semibold text-center">Add review</h1>
      <div className="bg-white p-6 rounded-xl shadow md:mx-40 mx-3">

        <div className="md:flex md:justify-center md:items-center mb-7">
          <div>
            <input type="text" placeholder="Name" className="border md:w-80 w-60 px-3 rounded-xl mx-10"
              value={addReview.name}
              onChange={(e) => {
                setAddReview({ ...addReview, name: e.target.value })
              }}
            />

            {addReview.error && (
              <p className="text-red-500 text-sm ml-12">
                {addReview.error}
              </p>
            )}
          </div>

          <div>
            <input type="number" min="1" max="5" placeholder="Rating (1-5)" 
            className="border md:w-40 w-60 px-3 rounded-xl mx-10 mt-6 md:mt-0"
              value={addReview.rating}
              onChange={(e) => {
                setAddReview({ ...addReview, rating: e.target.value })
              }}
            />
          </div>

        </div>
        <div className="flex justify-center mb-5">
          <textarea placeholder="Message" className="border w-140 px-3 rounded-xl mx-10"
            value={addReview.message}
            onChange={(e) => {
              setAddReview({ ...addReview, message: e.target.value })
            }}
          />
        </div>

        <div className="flex justify-center">
          <Button title="Add Review" button_sizes="small" onClick={addedReview} />
        </div>
      </div>

      <div>
        <Quizapp />
      </div>

      <div className="bg-white p-6 rounded-xl shadow md:mx-20 mx-3 mt-10">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-2">
          <GlobeLock strokeWidth={1.75} /> Data Security
        </h2>
        <p className="text-gray-700">
          Smart Campus follows secure data-handling practices to ensure user
          information is protected and used responsibly.
        </p>
      </div>
      <Toaster />
    </div>
    <Footer />
    </>
  );
}

export default About;

