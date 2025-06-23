import React from 'react'
import HeroPage from './HeroPage'
import WhyChoose from './WhyChoose'
import Products from '../shop/Products'

const HomePage = () => {
  return (
    <>
      <HeroPage/>
      <WhyChoose/>
      <Products headLine="Best Selling Product"/>
    </>
  )
}

export default HomePage