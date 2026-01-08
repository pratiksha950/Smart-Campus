import React from "react";
import Button from "./Button.jsx";
import { Plus,Minus } from 'lucide-react';
import {useState} from 'react'
import toast, {Toaster} from 'react-hot-toast';


function StationaryCard({ image, name, description, price,originalPrice, discount, addToCart, id }) {
    const [quantity,setQuantity]=useState(1);

  return (
    
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg p-4 flex flex-col justify-between h-130 w-64">
      
      
      <img
        src={image}
        alt={name}
        className="h-48 w-full object-cover rounded-t-xl"
      />

     
      <div className="p-5 flex flex-col flex-grow">
        
       
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {name}
        </h3>
      
        <p className="text-sm text-gray-600 flex-grow">
          {description}
        </p>

        <div className='flex mt-4 px-4 items-center justify-center text-[20px] font-bold border border-yellow-300 border-[3px] rounded-full mx-auto w-fit h-8 mb-2 '>

          <Minus className='cursor-pointer m-2 ' onClick={() => {
             if(quantity > 1) {
               setQuantity(quantity - 1) } else{
                  toast.error("Quantity cannot be less than 1")
               }
               }}/>

            <label className="m-3">{quantity}</label>

            <Plus className='cursor-pointer m-1  ' onClick={() => setQuantity(quantity + 1)}/>
            
        </div>

          <p className="text-sm font-medium text-green-700 bg-green-100 px-2 py-1 rounded-md justify-center text-center">Discount: {discount}%</p>

          
        <p className="text-xl font-bold text-blue-700 mt-4 text-center">
          <span className="line-through text-blue-400 mr-2">
            ₹{originalPrice}
          </span>
          ₹{price}
        </p>

        <div className="mt-4 justify-center flex">
          <Button variant="primary" size="medium" title={"Add To Cart"} onClick={() => addToCart({id, name, price, quantity,description,imageUrl:image, totalAmount: price * quantity })} />
        </div>
    
      </div>
    </div>
  );
}

export default StationaryCard;
