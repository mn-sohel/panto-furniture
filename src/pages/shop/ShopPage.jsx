import React from 'react'
import bannerImg from '../../assets/banner.png'
import Products from './Products'

const ShopPage = () => {
  return (
    <section className='min-h-screen'>
      {/* banner */}
      <div className='w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white' style={{backgroundImage: `url(${bannerImg})`}}>
        <h2 className='text-4xl font-bold'>Shop Our Product</h2>
      </div>
      <Products headLine="What's Your Choice"/>
    </section>
  )
}

export default ShopPage