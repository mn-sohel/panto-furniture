import React from 'react'
import bannerImg from '../../assets/banner.png'
import { FaSearch } from 'react-icons/fa'

const HeroPage = () => {
  return (
    <section className='h-screen relative bg-cover bg-center text-white' style={{backgroundImage: `url(${bannerImg})`}}>
        <div className='md:pt-44 pt-24 px-2 text-center space-y-6 md:w-1/2 mx-auto'>
            <h1 className='text-4xl lg:text-6xl font-medium lg:leading-tight leading-snug capitalize'>Make your interior more minimalistic & modern</h1>
            <p className='text-2xl font-normal lg:w-1/2 mx-auto'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

            {/* search field */}
            <div className='relative inline-block z-30'>
                <input type="text" placeholder='Search furniture' className='w-full md:w-80 px-6 py-2 rounded-full bg-white/15 placeholder:text-white border border-gray-300 focus:outline-none' />
                <div className='absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-[#E58411] rounded-full cursor-pointer'>
                    <FaSearch/>
                </div>
            </div>
        </div>

        {/* banner blur effect */}
        <div className='absolute bg-gradient-to-t from-white via-transparent to-transparent inset-x-0 bottom-0 h-3/4 -mb-2 blur-sm'></div>

        {/* hover button for tool tips */}
        <div className='absolute bottom-24 left-24 group'>
            <button className='relative p-4 bg-white/25 rounded-full border text-xl'>
              <div className='hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 p-2 rounded-lg bg-white/25 shadow-md group-hover:flex gap-2'>
                <div className='size-6 bg-red-600 border border-white rounded-full'></div>
                <div className='size-6 bg-blue-600 border border-white rounded-full'></div>
                <div className='size-6 bg-green-600 border border-white rounded-full'></div>
                
                {/* showing tooltip arrow */}
                <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/55'></div>
              </div>
            </button>
        </div>
        
    </section>
  )
}

export default HeroPage