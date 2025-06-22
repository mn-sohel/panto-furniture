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
    </section>
  )
}

export default HeroPage