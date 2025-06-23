import React from 'react'
import experienceImg from '../../assets/expricences.png'
import Button from '../../components/Button'

const Experience = () => {
  return (
    <section className='section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8'>
        <div className='md:w-1/2 md:h-[541px]'>
            <img src={experienceImg} alt="" className='h-full w-full'/>
        </div>
        <div className='md:w-1/2 mx-auto'>
            <h3 className='uppercase text-lg font-semibold text-[#E58411] mb-4'>experiences</h3>
            <h2 className='capitalize text-4xl font-bold mb-4 lg:w-1/2'>we provide you the best experience</h2>
            {/* <p className='text-[#1E1E1E] dark:text-white mb-5 lg:w-2/3'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials  </p> */}
            <p className='text-[#1E1E1E] mb-5 lg:w-2/3'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials  </p>
            <Button text="More Info"/>
        </div>
    </section>
  )
}

export default Experience