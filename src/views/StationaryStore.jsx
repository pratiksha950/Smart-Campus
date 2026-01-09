import StationaryCard from '../components/StationaryCard';
import StationaryCardData from '../configs/stationarydata';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import Footer from '../components/Footer';

function StationaryStore() {
  const [refreshCart, setRefreshCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); 

  function addToCart(items) {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemIndex = existingCart.findIndex((item) => item.id === items.id);

    if (itemIndex !== -1) {
      existingCart[itemIndex] = items;
    } else {
      existingCart.push(items);
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));

    setTimeout(() => {
      setRefreshCart(!refreshCart);
      toast.success("Item added to cart successfully!");
    }, 1000);
  }

  
  const filteredItems = StationaryCardData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <div>
      <Navbar refreshCart={refreshCart}/>

      <Toaster />

     
      <div className="flex justify-center p-4 bg-[#F8FAFF] font-sans">
        <input
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex w-130 border rounded-lg px-4 py-2 border-blue-900"
        />
      </div>

      
      <div className="flex flex-wrap gap-6 justify-center p-6 bg-[#F8FAFF] font-sans min-h-screen">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            const { id, image, name, description, price,originalPrice, discount } = item;
            return (
              <StationaryCard
                key={id}
                image={image}
                name={name}
                description={description}
                price={price}
                originalPrice={originalPrice}
                discount={discount}
                addToCart={addToCart}
                id={id}
              />
            );
          })
        ) : (
          <p className="text-gray-500 text-lg">No items found.</p>
        )}
      </div>
    </div>
     <Footer />
     </>
  );
}

export default StationaryStore;
