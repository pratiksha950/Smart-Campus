import React, { useState } from "react";

export default function LeaveApplication() {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    date: "",
    reason: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setMessage("Your leave application is submitted successfully ✅");

    console.log(formData);

    setFormData({
      name: "",
      rollNo: "",
      date: "",
      reason: "",
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-100 to-purple-100 flex items-center justify-center px-3 sm:px-6 py-4">
      
      <div className="w-full max-w-sm sm:max-w-md bg-white shadow-xl rounded-2xl p-5 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-indigo-700 mb-3 sm:mb-4">
          Leave Application
        </h2>

        {message && (
          <p className="text-center text-green-600 font-medium text-sm sm:text-base mb-3 sm:mb-4">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="rollNo"
            placeholder="Roll Number"
            value={formData.rollNo}
            onChange={handleChange}
            required
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            name="reason"
            placeholder="Reason for Leave"
            value={formData.reason}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />

          <button
            type="submit"
            className="w-full py-2 sm:py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm sm:text-base hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
