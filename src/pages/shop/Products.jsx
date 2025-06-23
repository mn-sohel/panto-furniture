import React from 'react'
import { products } from '../../utils/products'

const Products = ({headLine}) => {
    const categories = ["Chair", "Beds", "Sofa", "Lamp"]
  return (
    <div>
        <div className='section-container'>
            <h2 className='text-4xl font-bold text-center my-8'>{headLine}</h2>
            
            {/* category tabs */}
            <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16'>
                <div className='flex flex-col sm:flex-row items-center md:justify-center gap-4'>
                    {
                        categories.map((category, index)=> (
                            <button key={index} className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-[#E58411] hover:text-white transition-colors`}>{category}</button>
                        ))
                    }
                </div>

            </div>
            {/* product grid */}
            <div>
                {
                    products.map((product, index) => (
                        <div>{product.name}</div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Products