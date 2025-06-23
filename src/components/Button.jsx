import React from 'react'
import btnIcon from '../assets/button-icon.png'


const Button = ({text='Mone Info'}) => {
  return (
    <button className='text-sm text-[#E58411] flex items-center gap-1'>
        {text}
        <img src={btnIcon} alt="" />
    </button>
  )
}

export default Button