import React from "react";
import { useNavigate } from "react-router";
import addImg from "../assets/new-tour.png";

function AddMaterialCard() {
  const navigate = useNavigate();

  return (
   <button
  onClick={() => navigate("/newMaterial")}
  className="w-full max-w-xl mx-auto bg-white border border-blue-200 rounded-2xl px-6 py-5 flex items-center justify-between shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-300 group"
>
  <div className="text-left">
    <h2 className="text-lg font-semibold text-blue-500 group-hover:text-blue-800 transition-colors">
      Upload Study Material
    </h2>

    <p className="text-sm text-gray-600 mt-1">
      Add notes, previous year questions, assignments, and useful resources
    </p>

    <p className="text-xs text-blue-500 mt-2">
      Supported formats: PDF, DOC, Images • Easy sharing with students
    </p>
  </div>

  <div className="bg-blue-100 rounded-full p-3 group-hover:bg-blue-200 transition-colors">
    <img src={addImg} alt="add" className="h-8 w-8 object-contain" />
  </div>
</button>
  );
}

export default AddMaterialCard;
