import { Link } from "react-router-dom";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const Navbar = ({ refreshCart }) => {
  const [menuOpen, setMenuOpen] = useState(false);
   const [cartItems,setCartItems]=useState([]);

useEffect(() => {
  const existingCart =
  JSON.parse(localStorage.getItem("cartItems")) || [];
  setCartItems(existingCart);
}, [refreshCart]);

  return (
    <nav className="bg-blue-600 text-white px-5 py-4">
      <div className="flex justify-between items-center">
       
        <h1 className="text-xl font-bold">
          <Link to="/" className="hover:text-yellow-300">Smart Campus</Link>
        </h1>

        
        <div className="hidden md:flex space-x-6 items-center">
          
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/store" className="hover:text-yellow-300">Store</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
          <Link to="/m" className="hover:text-yellow-300">Material</Link>
          <Link to="/login" className="hover:text-yellow-300">Login</Link>

         
          <Link to="/cart" className="relative ml-4">
            <ShoppingCartIcon className="w-6 h-6 hover:text-yellow-300" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3Icon className="w-7 h-7" />
          )}
        </button>
      </div>

      
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 pb-4">
          <Link onClick={() => setMenuOpen(false)} to="/" className="block hover:text-yellow-300">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about" className="block hover:text-yellow-300">About</Link>
          <Link onClick={() => setMenuOpen(false)} to="/store" className="block hover:text-yellow-300">Store</Link>
          <Link onClick={() => setMenuOpen(false)} to="/contact" className="block hover:text-yellow-300">Contact</Link>
          <Link onClick={() => setMenuOpen(false)} to="/login" className="block hover:text-yellow-300">Login</Link>

          <Link
            onClick={() => setMenuOpen(false)}
            to="/cart"
            className="flex items-center gap-2 relative"
          >
            <ShoppingCartIcon className="w-6 h-6" />
            <span className="bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
