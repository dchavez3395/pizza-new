import React from 'react'
import {ChevronLeftIcon, XMarkIcon} from '@heroicons/react/24/solid'

const CartCount = ({onCartToggle, onClearCartItems, totalQTY}) => {
  return (
    <>
        <div className='h-11 bg-white items-center justify-between flex px-3 sticky top-0 left-0 right-0 w-full'>
            <div className='items-center flex gap-3'>
                <div className='items-center cursor-pointer grid' onClick={onCartToggle}>
                    <ChevronLeftIcon className='h-5 w-5 text-[#d1411e] stroke-[2]' />
                </div>
                <div className='items-center cursor-pointer grid'>
                    <h1 className='font-medium text-base'>Your Cart <span className='font-bold text-[#d1411e]'>{totalQTY}</span></h1>
                </div>
            </div>
            <div className='flex items-center'>
                <button type='button' onClick={onClearCartItems}>
                    <XMarkIcon className='h-5 w-5 text-[#d1411e]' />
                </button>
            </div>
        </div>
    </>
  )
}

export default CartCount