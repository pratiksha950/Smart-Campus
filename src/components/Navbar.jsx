import { Link } from "react-router-dom";
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalCount);
    };

    updateCartCount();

    // Listen for storage changes (in case cart is updated in another tab)
    window.addEventListener('storage', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  return (
    <nav className="bg-blue-600 text-white px-5 py-4">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold">Smart Campus</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/store" className="hover:text-yellow-300">Store</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
          <Link to="/login" className="hover:text-yellow-300">Login</Link>

          {/* Cart */}
         <Link to="/cart" className="relative ml-4">
  <ShoppingCartIcon className="w-6 h-6 hover:text-yellow-300" />
  <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
    {cartCount} {/* dynamic */}
  </span>
</Link>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 pb-4">
          <Link onClick={() => setMenuOpen(false)} to="/" className="block hover:text-yellow-300">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about" className="block hover:text-yellow-300">About</Link>
          <Link onClick={() => setMenuOpen(false)} to="/store" className="block hover:text-yellow-300">Store</Link>
          <Link onClick={() => setMenuOpen(false)} to="/contact" className="block hover:text-yellow-300">Contact</Link>
          <Link onClick={() => setMenuOpen(false)} to="/login" className="block hover:text-yellow-300">Login</Link>

          {/* Cart */}
          <Link onClick={() => setMenuOpen(false)} to="/cart" className="flex items-center gap-2">
            <ShoppingCartIcon className="w-6 h-6" />
        <ShoppingCart />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
