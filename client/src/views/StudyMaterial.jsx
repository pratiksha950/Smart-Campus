import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { getUserJwtToken } from "../utils";
import addImg from "../assets/new-tour.png";
import { Link } from "react-router";
import MaterialCard from "../components/MaterialCard";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
    import AddMaterialCard from "../components/AddMaterialCard";


function StudyMaterial() {
  const [materials, setMaterials] = useState([]);

  const loadMaterials = async () => {
    try {
      const token = getUserJwtToken();

      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/materials`,
        token
          ? {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          : {}
      );

      if (res.data.success) {
        setMaterials(res.data.data);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Error loading materials");
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = getUserJwtToken();

      await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/materials/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMaterials((prev) => prev.filter((item) => item._id !== id));

      toast.success("Deleted successfully");
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  useEffect(() => {
    loadMaterials();
  }, []);

  return (
    <div className="bg-[#F8FAFF]">
      <Navbar />

      

      <div className="w-11/12 m-auto mt-10 mb-10">

        <Heading text="Notes" />

        <p className="text-gray-500 mt-1 text-center">
          Download Notes
        </p>

        {/* ➕ ADD BUTTON */}
        <Link to="/NewMaterial">
          <img
            src={addImg}
            alt="add"
            className="fixed right-10 h-12 top-23 cursor-pointer"
          />
        </Link>

        {/* 📚 MATERIAL LIST */}
        <div className="flex flex-wrap gap-6 justify-center mt-6">
          {materials.length > 0 ? (
            materials.map((item) => (
              <MaterialCard
                key={item._id}
                {...item}
                onDelete={handleDelete} 
              />
            ))
          ) : (
            <p className="text-gray-400 mt-10">No materials available</p>
          )}
        </div>

      </div>
<AddMaterialCard />
      <Toaster />
      <Footer />
    </div>
  );
}

export default StudyMaterial;