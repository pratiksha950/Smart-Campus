import React from "react";

function ScholarshipCard({ scholarship }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 w-72 flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex gap-3">
          <img src={scholarship.icon} alt="icon" className="h-6 w-6" />
          <div>
            <h3 className="font-bold">{scholarship.title}</h3>
            <span className="text-gray-500 text-sm">{scholarship.institute}</span>
          </div>
        </div>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded ${
            scholarship.category === "Need-Based"
              ? "bg-green-100 text-green-700"
              : scholarship.category === "Merit-Based"
              ? "bg-blue-100 text-blue-700"
              : scholarship.category === "Women"
              ? "bg-pink-100 text-pink-700"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {scholarship.category}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-3">{scholarship.description}</p>

      {/* Info */}
      <ul className="text-sm text-gray-600 mb-3 space-y-1">
        <li className="flex items-center gap-2">
          <span className="text-green-500">$</span> {scholarship.amount}
        </li>
        <li className="flex items-center gap-2">
          <span className="text-blue-500">⏱</span> {scholarship.duration}
        </li>
        <li className="flex items-center gap-2">
          <span className="text-red-500">📅</span> Deadline: {scholarship.deadline}{" "}
          {scholarship.expired && <span className="text-red-600">(Expired)</span>}
        </li>
      </ul>

      {/* Benefits */}
      <div className="mb-3">
        <h4 className="font-bold mb-1">Benefits:</h4>
        <p className="bg-gray-100 p-2 rounded text-gray-700 text-sm">
          {scholarship.benefits}
        </p>
      </div>

      {/* Eligibility */}
      <div className="mb-3">
        <h4 className="font-bold mb-1">Key Eligibility:</h4>
        <ul className="bg-gray-100 p-2 rounded text-gray-700 text-sm list-disc list-inside space-y-1">
          {scholarship.eligibility.map((el, idx) => (
            <li key={idx}>{el}</li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <a
        href={scholarship.applyLink}
        target="_blank"
        className="mt-auto bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition flex justify-center items-center gap-2"
      >
        Apply Now <span>✈️</span>
      </a>
    </div>
  );
}

export default ScholarshipCard;