import React from 'react'

const TooltipButton = ({position='bottom', colors=['bg-red-600', 'bg-blue-600', 'bg-green-600']}) => {
    const positionClass = {
        bottom: {
            tooltip: 'bottom-full left-1/2 transform -translate-x-1/2 mb-3',
            arrow: 'left-1/2 transform -translate-x-1/2 -bottom-2 border-t'
        }
    }
  return (
    <>
        {/* hover button for tool tips */}
        <div className='relative group'>
            <button className='relative p-4 bg-white/25 rounded-full border text-xl'>
              <div className={`hidden absolute p-2 space-x-1 rounded-lg bg-white/25 shadow-md group-hover:flex ${positionClass[position].tooltip}`}>
              {colors.map((color, index) => (
                <div key={index} className={`size-6 ${color} border border-white rounded-full`}></div>
              ))}
                
                {/* showing tooltip arrow */}
                <div className={`absolute w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/55 ${positionClass[position].arrow}`}></div>
              </div>
            </button>
        </div>
    </>
  )
}

export default TooltipButton