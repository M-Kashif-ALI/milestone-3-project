"use client"

import { CartContext } from '@/app/context'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaShoppingBag } from 'react-icons/fa'
import { IoSearchOutline } from 'react-icons/io5'

const Logo = () => {
  const {count} = useContext(CartContext)
  return (
    <main className="flex flex-wrap justify-between items-center px-6 md:px-10 py-4 bg-white shadow-md">
      {/* Logo Section */}
      <div>
        <Image
          src="/images/logo.png"
          height={85}
          width={500}
          alt="logo"
          className="h-[60px] md:h-[85px] w-auto"
        />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:block">
        <ul className="flex items-center space-x-6 font-bold">
          <li>
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link href="/product" className="hover:text-gray-700">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-700">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-700">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Search and Icons */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-full px-2">
          <span className="text-gray-600 text-[20px]">
            <IoSearchOutline />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="h-[35px] w-[150px] px-3 text-sm text-gray-600 focus:outline-none bg-gray-100 rounded-full"
          />
        </div>

        {/* Heart Icon */}
        <div>
          <CiHeart className="text-2xl hover:cursor-pointer text-gray-600 hover:text-black" />
        </div>

        {/* Cart Icon */}
        <Link href="/cart">
          <div className="flex flex-col items-center">
            <FaShoppingBag className="text-2xl hover:cursor-pointer text-gray-600 hover:text-black" />
            <span className="text-sm font-semibold text-gray-600">
              Cart ({count})
            </span>
          </div>
        </Link>
      </div>
    </main>
  )
}

export default Logo