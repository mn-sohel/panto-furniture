import React from 'react'
import Button from '../../components/Button'

const WhyChoose = () => {
  return (
    <section className='section-container'>
        <div className='my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8 md:gap-12 text-left'>
            <div>
                <h2 className='font-["Poppins"] font-bold text-[42px]'>Why <br/> Choosing Us</h2>
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-3'>Luxury facilities</h3>
                <p text-base mb-2>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                <Button/>
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-3'>Affordable Price</h3>
                <p text-base mb-2>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
                <Button/>
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-3'>Many Choices</h3>
                <p text-base mb-2>We provide many unique work space choices so that you can choose the workspace to your liking.</p>
                <Button/>
            </div>
        </div>
    </section>
  )
}

export default WhyChoose