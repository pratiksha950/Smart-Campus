import React from 'react'
import Button from '../components/Button.jsx'
import { Trash } from "lucide-react";

const removeFromCart = (id) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const updatedCartItems = cartItems.filter(item => item.id !== id);
  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  window.location.reload();
}

function CartStationaryItem({
  id,
  name,
  description,
  price,
  quantity,
  imageUrl,
}) {
  return (
    <div
      className="
relative
  flex flex-col md:flex-row
  items-start
  gap-4
  rounded-lg
  shadow-md
  p-4
  mb-4
  bg-white
  w-full
  max-w-4xl

  transition-shadow duration-300
  hover:shadow-lg      "
    >

    
      <div className="absolute top-3 right-3">
        <Button
          title={<Trash size={16} />}
          variant="delete"
          size="small"
          onClick={() => removeFromCart(id)}
        />
      </div>

     
      <div className="w-32 h-32 flex-shrink-0">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-contain  rounded-3xl"
        />
      </div>

     
      <div className="flex flex-col gap-2 flex-1">
        <p className="text-md font-semibold">Item Name: {name}</p>
        <p className="text-sm text-gray-700">{description}</p>
        <p>Price: ₹ {price} per Unit</p>
        <p> Quantity: {quantity}</p>
        <p className="font-bold">Total: ₹ {price * quantity}</p>
      </div>
    </div>
  )
}

export default CartStationaryItem;
