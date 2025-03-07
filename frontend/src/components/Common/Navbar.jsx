import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineUser, HiBars3BottomRight, HiOutlineShoppingBag} from 'react-icons/hi2'
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'
import { IoMdClose } from 'react-icons/io'

export default function Narvar() {

   const [drawerOpen, setDrawerOpen] = useState(false);
   const [navDrawerOpen, setNavDrawerOpen] = useState(false);

   const toogleNavDrawer = () =>{
    setNavDrawerOpen(!navDrawerOpen);
   }

    const toggleCartDrawer = ()=>{
        setDrawerOpen(!drawerOpen);
    }

  return (
    <div>
      <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
        {/* left logo */}
        <div className="">
          <Link to='/' className='text-2xl font-medium'>Logo</Link>
        </div>

        {/* center navigation links */}
        <div className="hidden md:flex space-x-6">
          <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            Men
          </Link>

          <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            Women
          </Link>

          <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            Top Wear
          </Link>

          <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
            Bottom Wear
          </Link>
        </div>

        {/* right icons */}
        <div className="flex items-center space-x-4">
          <Link to='/profile' className='hover:text-black'>
            <HiOutlineUser className='h-6 w-6 text-gray-700'></HiOutlineUser>
          </Link>

          {/* cart icon */}
          <button
          onClick={toggleCartDrawer}
           className='relative hover:text-black'>
            <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' ></HiOutlineShoppingBag>
            <span className='absolute bg-red-500 -top-1 text-white text-xs rounded-full px-2 py-0.5'>4</span>
          </button>

          {/* serach */}
          <div className="overflow-hidden">
               <SearchBar></SearchBar>
          </div>

          <button  
          onClick={toogleNavDrawer}
          className='md:hidden'>
            <HiBars3BottomRight className='h-6 w-6 text-gray-700'></HiBars3BottomRight>
          </button>

        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}></CartDrawer>

      {/* Mobile Navigation */}

      <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        navDrawerOpen ? "translate-x-0" : "-translate-x-full"
      }`}>

      <div className="flex justify-end p-4">
        <button onClick={toogleNavDrawer}>
          <IoMdClose className='h-6 w-6 text-gray-600'></IoMdClose>
        </button>
      </div>
      <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 shadow-md rounded-lg">
  <h2 className="text-2xl font-bold text-gray-800 mb-3">Menu</h2>
  <nav className="flex flex-col gap-3">
    {["Men", "Women", "Top Wear", "Bottom Wear"].map((item, index) => (
      <Link
        key={index}
        to="#"
        onClick={toogleNavDrawer}
        className="block px-4 py-2 text-gray-700 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 
                   hover:from-blue-200 hover:to-purple-200 transition-all duration-300"
      >
        {item}
      </Link>
    ))}
  </nav>
</div>

      </div>

    </div>
  )
}
