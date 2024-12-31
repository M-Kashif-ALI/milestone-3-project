"use client"
import { CartContext } from '@/app/context'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'

interface productTypes {
  id: number
  name: string
  title: string
  description: string
  detailDescription: string
  price: number
  img: string
}

const ProductPage = ({ params }: { params: { product_page: string } }) => {
  const { add } = useContext(CartContext)
  const [product, setproduct] = useState<productTypes | null>(null)

  useEffect(() => {
    const products = async () => {
      const fetchData = await fetch(`http://localhost:3000/api/product?id=${params.product_page}`)
      const fetchedData = await fetchData.json()
      setproduct(fetchedData)
    };
    products();
  }, [params.product_page])

  if (!product) {
    return <div className='text-center font-bold text-2xl'>Loading...</div>;
  }
  return (
    <main className='md:w-[92%] mx-auto w-full px-5'>
      <section>
        <h1 className='text-4xl font-bold text-center my-5'>{product.name}</h1>
        <div className='bg-gray-200 grid grid-cols-1 lg:grid-cols-2 h-[450px] items-center w-full'>
          {/* Image */}
          <div>
            <Image src={product.img} alt={product.name} height={500} width={500} className='h-[400px] w-auto pl-5' />
          </div>
          {/* Detail */}
          <div className='flex flex-col gap-5 items-center justify-around'>
            <p className='text-xl font-bold'> {product.title}</p>
            <p>{product.detailDescription}</p>
            <p className='font-bold text-lg'>${product.price}</p>
            <button
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition duration-300"
              onClick={() => add({ ...product, quantity: 1 })}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;