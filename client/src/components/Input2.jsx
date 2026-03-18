import React from "react";

function Input2({
  type,
  placeholder,
  value,
  name,
  onChange,
  autoComplete,
  onKeyDown
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      autoComplete={autoComplete}
      onKeyDown={onKeyDown}
      className="border rounded-xl h-8 w-full text-sm text-center
        focus:outline-none focus:border-pink-700"
    />
  );
}

export default Input2;