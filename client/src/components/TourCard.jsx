import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { getUserJwtToken } from "../utils";

function TourCard({
  _id,
  title,
  Description,
  cities,
  startDate,
  endDate,
  photos = [],
  onDeleteSuccess,
}) {

  // 🗑️ DELETE FUNCTION
  const deleteTour = async () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this tour?"
    );

    if (!confirmDelete) return;

    try {

      const res = await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/tours/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${getUserJwtToken()}`,
          },
        }
      );

      if (res.data.success) {

        toast.success("Tour deleted successfully");

        // 🔄 Remove from UI
        if (onDeleteSuccess) {
          onDeleteSuccess(_id);
        }

      } else {

        toast.error(res.data.message);

      }

    } catch (error) {

      console.error(error);
      toast.error("Delete failed");

    }

  };

  return (

    <div className="bg-white shadow-lg rounded-xl p-4 mb-6">

      {/* TITLE + DELETE */}
      <div className="flex justify-between items-center">

        <h2 className="text-xl font-bold">
          {title}
        </h2>

        {/* 🗑️ DELETE BUTTON */}
        <button
          onClick={deleteTour}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
        >
          🗑️ Delete
        </button>

      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-600 mt-2 mb-2">
        {Description}
      </p>

      {/* CITIES */}
      <p className="text-sm text-gray-500 mb-2">
        Cities: {cities?.join(", ")}
      </p>

      {/* DATES */}
      <p className="text-sm text-gray-500 mb-3">
        {startDate} → {endDate}
      </p>

      {/* PHOTOS */}
      <div className="flex gap-3 flex-wrap">

        {photos.map((file, index) => (

          <div key={index}>

            {file.match(/\.(jpeg|jpg|png|gif)$/i) ? (

              <img
                src={file}
                alt="tour"
                className="w-40 h-28 object-cover rounded-lg shadow"
              />

            ) : (

              <a
                href={file}
                target="_blank"
                rel="noreferrer"
                className="block bg-blue-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-600"
              >
                📄 Open File
              </a>

            )}

          </div>

        ))}

      </div>

    </div>

  );

}

export default TourCard;