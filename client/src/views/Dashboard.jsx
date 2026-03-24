import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { getUserJwtToken } from "../utils";
import addImg from "../assets/new-tour.png";
import { Link, useNavigate } from "react-router";
import MaterialCard from "../components/MaterialCard";

function Dashboard() {
  const [materials, setMaterials] = useState([]);
  const navigate = useNavigate();

  const loadMaterials = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/materials`,
        {
          headers: {
            Authorization: `Bearer ${getUserJwtToken()}`,
          },
        }
      );

      if (res.data.success) {
        setMaterials(res.data.data);
      } else {
        toast.error(res.data.message);
      }
    } catch {
      toast.error("Error loading materials");
    }
  };

  useEffect(() => {
    if (!getUserJwtToken()) {
      toast.error("Login first!");
      navigate("/login");
      return;
    }

    loadMaterials();
  }, []);

  return (
    <>
      <Navbar />

      <div className="w-11/12 m-auto mt-20 mb-10">

        {/* ➕ ADD BUTTON */}
        <Link to="/NewMaterial">
          <img
            src={addImg}
            alt="add"
            className="fixed bottom-10 right-10 h-12 cursor-pointer"
          />
        </Link>

        {/* 📚 MATERIAL LIST */}
        <div className="flex flex-wrap gap-6 justify-center">
          {materials.map((item) => (
            <MaterialCard key={item._id} {...item} />
          ))}
        </div>

      </div>

      <Toaster />
    </>
  );
}

export default Dashboard;