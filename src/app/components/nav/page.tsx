import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaShoppingBag } from 'react-icons/fa'
import { IoSearchOutline } from 'react-icons/io5'

const Logo = () => {
  return (
    <main className='flex justify-between items-center px-10'>
      <div>
        <Image src="/images/Logo (1).png" height={500} width={5000} alt='logo' className='h-[85px] w-auto'/>
      </div>
      <div>
        <ul className='flex justify-between items-center md:w-[250px] font-bold'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/product'>Products</Link></li>
          <li><Link href='/about'>About Us</Link></li>
        </ul>
      </div>
      <div className='flex items-center justify-between w-[300px]'>
        <div className='flex items-center bg-gray-100 rounded-full'>
          <span className='font-semibold text-[20px] pl-2'><IoSearchOutline /></span>
          <input type="text" placeholder='Search' className='h-[35px] w-[150px] px-3 focus:outline-none font-semibold bg-gray-100 rounded-full'/>
        </div>
        <div className='flex justify-evenly w-[100px] text-2xl'>
        <CiHeart className='hover:cursor-pointer'/>
        <FaShoppingBag className='hover:cursor-pointer'/>
        </div>
      </div>
    </main>
  )
}

export default Logo