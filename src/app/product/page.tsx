"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context'

interface productTypes {
  id: number;
  name: string;
  title: string;
  description: string;
  detailDescription: string;
  price: number;
  img: string;
  quantity: number;
}


const Product = () => {

  const [product, setproduct] = useState<productTypes[]>([])
  const {add} = useContext(CartContext)

  useEffect(() => {
    const products = async () => {
      const fetchData = await fetch("api/product")
      const fetchedData = await fetchData.json()
      setproduct(fetchedData)
    };
    products();
  }, [])

  return (
    <section className='px-6'>
      <h1 className='text-5xl font-semibold font-serif text-center py-3'>Featured Products</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center'>
        {
          product.map((items) => (
            <div key={items.id} className='my-10'>
              <div className='space-y-5 w-full md:w-[90%]'>
                <Link href={`/product/${items.id}`}>
                  <Image src={items.img} alt={items.name} height={200} width={500} className='w-[500px] h-auto object-cover' />
                  <p className='text-center font-bold text-lg pt-5'>{items.name}</p>
                  <p className='text-center font-semibold py-2'>{items.title}</p>
                  <p className="md:text-base font-bold text-2xl mt-4 text-center">
                    {`$${items.price}`}
                  </p>
                </Link>
                <p className='text-center text-gray-500'>{items.description}</p>
                <div className='flex items-center justify-between'>
                  <div className="border-2 px-5 py-2 rounded-md cursor-pointer w-fit my-5 bg-blue-500 hover:bg-blue-400 duration-200 font-semibold" onClick={() => add({ ...items, quantity: 1 })}>
                    Add To Cart
                  </div>
                
                  <div
                    className="border-2 px-5 py-2 rounded-md cursor-pointer w-fit my-5 font-semibold text-white bg-[rgb(255,105,135)] hover:bg-gradient-to-r hover:from-[rgb(255,105,135)] hover:to-[rgb(255,183,77)] transition-colors"
                  >
                    Add To WishList
                  </div>
                  </div>
              </div>
            </div>
          ))
        }
      </div>

      {product.length > 0 && (
        <div>
          <h2 className="text-3xl font-semibold my-10">Top categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {product.slice(2, 8).map((items) => (
              <div key={items.id}>
                <div className='space-y-5 w-full md:w-[90%]'>
                  <Link href={`/product/${items.id}`}>
                    <Image src={items.img} alt={items.name} height={200} width={500} className='w-[500px] h-auto object-cover' />
                    <p className='text-center font-bold text-lg pt-5'>{items.name}</p>
                    <p className='text-center font-semibold py-2'>{items.title}</p>
                    <p className="md:text-base font-bold text-2xl mt-4 text-center">
                      {`$${items.price}`}
                    </p>
                  </Link>
                  <p className='text-center text-gray-500'>{items.description}</p>
                  <Link href={`/product/${items.id}?id=${items.id}`} className='flex justify-around'>
                    <div className="border-2 px-5 py-2 rounded-md cursor-pointer w-fit my-5 bg-blue-500 hover:bg-blue-400 duration-200 font-semibold">
                      Add To Cart
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  )
}

export default Product