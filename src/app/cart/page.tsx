"use client"

import React, { useContext } from 'react'
import { CartContext } from '../context'
import { MdDeleteForever } from 'react-icons/md'
import Image from 'next/image'

const Cart = () => {
  const {cart, del , count} = useContext(CartContext)
  return (
    <div className='min-h-screen'>
      <h1 className='text-[32px] font-bold font-serif text-center'>Cart</h1>
      <p className='text-[20px] font-semibold text-center'>Total items in Cart: ({count})</p>
      <ol className='mx-7 bg-gray-100 shadow-lg mt-5 divide-y-8 divide-white'>
        {
          cart.map((item) => (
            <li key={item.id} className="py-4 flex justify-between items-center px-3">
              <Image src={item.img} alt={item.name} height={150} width={150}/>
            <span className="text-gray-700 mr-[110px]">
              {item.name} - <span className="font-medium text-gray-900">${item.price}</span> <span className='text-green-600 font-semibold text-[20px]'>(x{item.quantity})</span>
            </span>
            <button className='text-[30px] text-red-500 active:bg-red-200 rounded-full duration-200 px-1 py-1' onClick={() => del(item.id)}>
            <MdDeleteForever />
            </button>
          </li>
          ))
        }
      </ol>
    </div>
  )
}

export default Cart