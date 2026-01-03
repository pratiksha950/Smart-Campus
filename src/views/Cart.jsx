import React, { useEffect } from 'react'
import {useState} from 'react'
import CartStationaryItem from '../components/CartStationaryItem';


function Cart() {
  const [cartItems,setCartItems]=useState([]);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    const existingCart =
    JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(existingCart);
  },[])

useEffect(() => {
  const total = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  setTotalAmount(total);
}, [cartItems]);


  return (
    <div className='bg-blue-200 min-h-screen '>
     
      <h3 className='text-center font-bold text-2xl  bg-blue-300 p-4'>
        Total Amount: ₹ {totalAmount}
      </h3>


    <div className='min-h-screen flex flex-row flex-wrap gap-4 justify-center bg-blue-200 p-4 '>
      <div className='max-h-[400px ]  '>
      {
        cartItems.map((item)=>{
            console.log(item);
          return(<CartStationaryItem key={item.id}  {...item} >
            
          </CartStationaryItem>) 
        })
      }
      </div>

    </div>
    </div>
  )
}

export default Cart