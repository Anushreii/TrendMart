import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineUser, HiBars3BottomRight, HiOutlineShoppingBag} from 'react-icons/hi2'
import SearchBar from './SearchBar'

export default function Narvar() {
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
          <button className='relative hover:text-black'>
            <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' ></HiOutlineShoppingBag>
            <span className='absolute bg-red-500 -top-1 text-white text-xs rounded-full px-2 py-0.5'>4</span>
          </button>

          {/* serach */}
          <div className="overflow-hidden">
               <SearchBar></SearchBar>
          </div>

          <button className='md:hidden'>
            <HiBars3BottomRight className='h-6 w-6 text-gray-700'></HiBars3BottomRight>
          </button>

        </div>
      </nav>
    </div>
  )
}
