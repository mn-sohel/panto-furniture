import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Rating = ({rating}) => {
    const totalStars = 5;
  return (
    <div className='flex space-x-1'>
        {
            Array.from({length: totalStars}, (_, index) => {
                const startIndex = index + 1;
                return startIndex <= rating ? (<AiFillStar key={index} className='text-yellow-500'/>) : (<AiOutlineStar key={index} className='text-gray-400'/>)
            })
        }
    </div>
  )
}

export default Rating