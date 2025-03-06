import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import CartContent from '../Cart/CartContent';

const CartDrawer = ({drawerOpen, toggleCartDrawer}) => {
   


  return (
    <div 
    className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
    }`}>
     
     {/* close button */}
     <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
            <IoMdClose className='h-6 w-6 text-gray-600'></IoMdClose>
        </button>
     </div>


     {/* cart contents with scrollable area */}
     <div className="flex-grow p-4 overflow-y-auto">
        <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
        <CartContent></CartContent>
     </div>


     {/* checkout button fixed at the bottom */}
     <div className="p-4 bg-white sticky bottom-0" >
     <button className=' w-full bg-gradient-to-r from-purple-700 to-orange-600 text-white transition hover:brightness-110 hover:shadow-xl
   px-6 py-3 rounded-lg font-semibold'>Checkout</button>
     <p className='text-sm tracking-tighter text-gray-600 mt-2 text-center'>Shipping, taxes, and discount codes calculated at checkout</p>
     </div>
    </div>
  )
}

export default CartDrawer
