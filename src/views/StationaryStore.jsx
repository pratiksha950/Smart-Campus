
import StationaryCard from '../components/StationaryCard';
import StationaryCardData from '../configs/stationarydata';
import toast,{Toaster} from 'react-hot-toast'
import {useState} from 'react'



function StationaryStore() {
    const [refreshCart,setRefreshCart]=useState(false);
  function addToCart(items){

    const existingCart=JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemIndex=existingCart.findIndex((item) => item.id === items.id);

    if(itemIndex !== -1){
      existingCart[itemIndex]=items;
    }else{
      existingCart.push(items);
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));

    setTimeout(() => {
      setRefreshCart(!refreshCart);
      toast.success("Item added to cart successfully!");
    }, 1000);
  }
  return (

    <div>
      {/* <Navbar refreshCart={refreshCart}/> */}
        <Toaster  />

    <div className="flex flex-wrap gap-6 justify-center p-6 bg-gray-100 min-h-screen">
      {StationaryCardData.map((item) => {
        const { id, image, name, description, price, discount } = item;

        return (
          <StationaryCard
            key={id}
            image={image}
            name={name}
            description={description}
            price={price}
            discount={discount}
            addToCart={addToCart}
            id={id}
          />
        );
      })}
      <Toaster  />
    </div>
    </div>
  );
}

export default StationaryStore;
