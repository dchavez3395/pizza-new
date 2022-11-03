import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import React from 'react'

const CartEmpty = ({onCartToggle}) => {
  return (
    <>
        <div className='items-center h-screen px-11 py-12 text-center gap-7 justify-center'>
            <div className='m-auto text-center flex flex-col px-8 '>
                <img src="/../src/assets/sad-slice.png" className=' h-auto object-fill' alt="" />
                <h2 className='lg:text-4xl font-bold'>No Pizza in cart :(</h2>
            </div>
            <button type='button' onClick={onCartToggle} className='button-theme flex items-center gap-2 justify-center shadow-lg mt-4 bg-[#d1411e] text-white m-auto'><ArrowLeftIcon className='w-5 h-5'/> <span>Back to Menu</span></button>
        </div>
    </>
  )
}

export default CartEmpty