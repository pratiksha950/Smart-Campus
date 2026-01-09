import React from "react";

const buttton_Varients = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded-md transition duration-300 w-50 text-center justify-center",
  delete:
    "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded-md transition duration-300 w-10 h-8 md:w-10 text-center justify-center ",


};

const button_sizes = {
  small: "text-sm",
  medium: "text-md",
  large: "text-lg",
};

function Btn({ title, variant = "primary", onClick, size = "medium" }) {
  return (
    <button
      className={`${buttton_Varients[variant]} ${button_sizes[size]}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Btn;
