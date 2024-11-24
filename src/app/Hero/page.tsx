import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    
    <div className='my-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

        <div className='flex justify-around my-3'>
        <div className='border-2 border-black '>
          <div className='my-4'>
            <Image src={'/dove.png'} height={300} width={300} alt='dove'/>
          </div>
          <p className='text-2xl font-bold flex justify-center'>Dove Shampoo</p>
          <p className='text-2xl font-bold flex justify-center my-4'>Rs.500</p>
          <div className='flex justify-center'><button className=' text-2xl bg-sky-500 font-bold rounded-md px-3 '>Buy Now</button></div>
        </div>
        </div>

        <div className='flex justify-around'>
        <div className='border-2 border-black '>
          <div className='my-4'>
            <Image src={'/dove.png'} height={300} width={300} alt='dove'/>
          </div>
          <p className='text-2xl font-bold flex justify-center'>Dove Shampoo</p>
          <p className='text-2xl font-bold flex justify-center my-4'>Rs.500</p>
          <div className='flex justify-center'><button className=' text-2xl bg-sky-500 font-bold rounded-md px-3 '>Buy Now</button></div>
        </div>
        </div>

        <div className='flex justify-around my-3'>
        <div className='border-2 border-black '>
          <div className='my-4'>
            <Image src={'/dove.png'} height={300} width={300} alt='dove'/>
          </div>
          <p className='text-2xl font-bold flex justify-center'>Dove Shampoo</p>
          <p className='text-2xl font-bold flex justify-center my-4'>Rs.500</p>
          <div className='flex justify-center'><button className=' text-2xl bg-sky-500 font-bold rounded-md px-3 '>Buy Now</button></div>
        </div>
        </div>
    </div>
  )
}

export default page