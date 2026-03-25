import React from "react";

function Heading({ text }) {
  return (
    <div className="text-center mb-0 mt-4 special-elite-regular">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
        {text}
      </h2>

    </div>
  );
}

export default Heading;
