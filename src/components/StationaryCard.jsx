import React from "react";
import Button from "./Button.jsx";
import { CirclePlus,CircleMinus } from 'lucide-react';
import {useState} from 'react'
import toast, {Toaster} from 'react-hot-toast';




function StationaryCard({ image, name, description, price, addToCart, id }) {
    const [quantity,setQuantity]=useState(1);

  return (
    
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 w-80 flex flex-col">
      
      
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

        <div className='flex mt-4 px-4 items-center justify-center text-2xl font-bold '>

          <CircleMinus className='cursor-pointer m-2 ' onClick={() => {
             if(quantity > 1) {
               setQuantity(quantity - 1) } else{
                  toast.error("Quantity cannot be less than 1")
               }
               }}/>

            <label>{quantity}</label>

            <CirclePlus className='cursor-pointer m-2  ' onClick={() => setQuantity(quantity + 1)}/>
            
        </div>


        <p className="text-xl font-bold text-blue-700 mt-4 text-center">
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
