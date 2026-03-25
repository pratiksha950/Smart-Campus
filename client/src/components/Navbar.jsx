import { Link } from "react-router";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import Avatar from "./Avatar";
import { getUserData, logOutUser } from "../utils";
import Button from "../components/Button"


const Navbar = ({ refreshCart }) => {
  const [menuOpen, setMenuOpen] = useState(false);
   const [cartItems,setCartItems]=useState([]);
    const [userData, setUserData] = useState({});

useEffect(() => {
  const data = getUserData();
  setUserData(data || {});
}, []);


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
           <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/Scholership" className="hover:text-yellow-300">Scholership</Link>
          <Link to="/StationaryStore" className="hover:text-yellow-300">Store</Link>
          <Link to="/material" className="hover:text-yellow-300">Material</Link>
           <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
           <Link to="/NewTour" className="hover:text-yellow-300">NewTour</Link>
           <Link to="/Dashboard" className="hover:text-yellow-300">Dashboard</Link>
          

          
          <div>
            {userData?.name ? (
              <div className="flex items-center gap-2 hidden md:flex">
                <Link to="/profile" className="flex items-center gap-1">
                  {userData?.photos?.length > 0 ? (
                    <img
                      src={userData.photos[0]}
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover hidden md:flex "
                    />
                  ) : (
                    <Avatar name={userData.name} />
                  )}
                  <span className="text-sm md:text-lg hover:text-blue-500">Hello, {userData.name}</span>
                </Link>

                <Button
                  title="Logout"
                  varient="primary"
                  onClick={logOutUser}
                />
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:block bg-blue-500 text-white md:px-3 px-1 md:py-1 py-0.5 text-sm rounded hover:bg-blue-600"
              >
                Login
              </Link>
            )}
          </div>

         
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
          <Link onClick={() => setMenuOpen(false)} to="/about" className="block hover:text-yellow-300">About</Link>
          <Link onClick={() => setMenuOpen(false)} to="/Scholership" className="block hover:text-yellow-300">Scholership</Link>
          <Link onClick={() => setMenuOpen(false)} to="/StationaryStore" className="block hover:text-yellow-300">Store</Link>
           <Link onClick={() => setMenuOpen(false)} to="/Material" className="block hover:text-yellow-300">Material</Link>
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
