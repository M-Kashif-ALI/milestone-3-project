import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div>
      <Image src="/images/banner1.png" height={1000} width={1000} alt='banner' className='h-[550px] w-[100vw]'/>
    </div>
  )
}

export default Banner