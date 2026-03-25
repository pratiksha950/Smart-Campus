import React from "react";

function SubHeading({ text }) {
  return (
    <div className="text-center my-4 philosopher-regular">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-600">
        {text}
      </h2>

    </div>
  );
}

export default SubHeading;
