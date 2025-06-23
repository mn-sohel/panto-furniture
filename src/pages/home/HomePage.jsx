import React from 'react'
import HeroPage from './HeroPage'
import WhyChoose from './WhyChoose'
import Products from '../shop/Products'
import Experience from './Experience'
import Materials from './Materials'

const HomePage = () => {
  return (
    <>
      <HeroPage/>
      <WhyChoose/>
      <Products headLine="Best Selling Product"/>
      <Experience/>
      <Materials/>
    </>
  )
}

export default HomePage