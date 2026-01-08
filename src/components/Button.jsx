import React from "react";

const buttton_Varients = {
  primary:
    "bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-3 rounded-md transition duration-300 w-50 text-center justify-center",
  delete:
    "bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-3 rounded-md transition duration-300 w-8 h-8 md:w-10 text-center justify-center ",


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
