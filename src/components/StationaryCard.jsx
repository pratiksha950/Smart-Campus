import React from "react";
import { ShoppingCart } from "lucide-react";
import Button from "./Button.jsx";

function StationaryCard({ image, name, description, price, onAddToCart }) {
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

     
        <p className="text-xl font-bold text-blue-700 mt-4">
          ₹{price}
        </p>

        <div className="mt-4 justify-center flex">
          <Button variant="primary" size="medium" title={"Add To Cart"} />
        </div>

       

       
    
      </div>
    </div>
  );
}

export default StationaryCard;
