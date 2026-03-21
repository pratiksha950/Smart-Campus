import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { getUserJwtToken } from "../utils";
import newTour from "../assets/new-tour.png";
import { Link } from "react-router";
import TourCard from "../components/TourCard";
import { useNavigate } from "react-router"

function Dashboard() {

  const [tours, setTours] = useState([]);
  const navigate = useNavigate();

  const userJwt = getUserJwtToken();

  // 📥 LOAD TOURS
  const loadTours = async () => {

    try {

      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/tours`,
        {
          headers: {
            Authorization: `Bearer ${userJwt}`,
          },
        }
      );

      if (response.data.success) {

        setTours(response.data.data);

      } else {

        toast.error(response.data.message);

      }

    } catch (error) {

      toast.error("Error loading tours");

    }

  };

  // 🔒 LOGIN CHECK
  useEffect(() => {

    const token = getUserJwtToken();

    if (!token) {

      toast.error("Please login first!");
      navigate("/login");
      return;

    }

    loadTours();

  }, []);

  return (

    <div>

      <Navbar />

      <div className="w-11/12 m-auto mt-30 mb-10">

        {/* ➕ ADD NEW TOUR BUTTON */}
        <Link to="/newtour">

          <img
            src={newTour}
            alt="newTour"
            className="fixed bottom-10 right-10 h-12 cursor-pointer"
          />

        </Link>

        {/* 🧾 TOUR LIST */}
        {tours.map((tourItem) => {

          return (

            <TourCard
              key={tourItem._id}
              {...tourItem}

              // 🗑️ REMOVE CARD AFTER DELETE
              onDeleteSuccess={(deletedId) => {

                setTours((prevTours) =>
                  prevTours.filter(
                    (tour) => tour._id !== deletedId
                  )
                );

              }}

            />

          );

        })}

      </div>

      <Toaster />

    </div>

  );

}

export default Dashboard;