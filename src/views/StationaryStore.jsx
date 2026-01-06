import StationaryCard from '../components/StationaryCard';
import StationaryCardData from '../configs/stationarydata';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

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
    <div>
      {/* <Navbar refreshCart={refreshCart}/> */}
      <Toaster />

     
      <div className="flex justify-center p-4 bg-gray-100">
        <input
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      
      <div className="flex flex-wrap gap-6 justify-center p-6 bg-gray-100 min-h-screen">
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
  );
}

export default StationaryStore;
