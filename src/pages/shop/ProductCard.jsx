import React from 'react'
import { getImgUrl } from '../../utils/getImageURL'
import Rating from '../../components/Rating'
import { FiPlus } from 'react-icons/fi'

const ProductCard = ({product}) => {
  return (
    <div>
        <div className='bg-[#FAFAFA]'>
            <img src={getImgUrl(`${product.imageUrl}`)} alt="" />
        </div>
        {/* <div className='p-6 bg-white dark:bg-black shadow-sm'> */}
        <div className='p-6 bg-white'>
            <h4 className='text-base mb-1'>{product.category}</h4>
            <h3 className='font-semibold text-xl mb-2'>{product.name}</h3>
            <Rating rating={product.rating}/>
            <div className='mt-5 flex justify-between items-center'>
                {/* <p className='text-[#1E1E1E] dark:text-white font-bold text-lg'><sup>$</sup> <span>{product.price}</span></p> */}
                <p className='text-[#1E1E1E]'><sup>$</sup> <span>{product.price}</span></p>
                <button className='bg-[#1E1E1E] hover:bg-black/55 text-white p-2 rounded-full'>
                    <FiPlus/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard