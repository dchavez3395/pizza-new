import React from 'react'
import {MinusIcon, PlusIcon, TrashIcon} from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'
import { setDecreaseItemQTY, setIncreaseItemQTY, setRemoveItemFromCart } from '../../app/CartSlice.js';

const CartItem = ({item: { id, name, image, cartQuantity, price, description}}) => {
    const dispatch = useDispatch();

    const onRemoveItem = () => {
         dispatch(setRemoveItemFromCart({id, name, image, cartQuantity, price, description}))
    }

    const onIncreaseItemQTY = () => {
        dispatch(setIncreaseItemQTY({id, name, image, cartQuantity, price, description}))
    }

    const onDecreaseItemQTY = () => {
        dispatch(setDecreaseItemQTY({id, name, image, cartQuantity, price, description}))
    }

  return (
    <>
        <div className='flex items-center justify-between  rounded-xl shadow-md hover:shadow-[#d1411e]/70 w-fit lg:w-full bg-white/80 px-5'>
            <div className='flex items-center lg:gap-5'>
                <div className='relative  p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center'>
                    <img className='object-full  h-auto w-28' src={image} alt={`img/${name}`}/>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='grid items-center gap-1 leading-none pr-2'>
                        <h1 className='font-medium text-[#d1411e] text-md '>{name}</h1>
                        <p className='  text-xs'>{description}</p>
                    </div>
                    <div className='items-center justify-around w-2/3 flex'>
                        <button className='rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90' type='button'>
                            <MinusIcon className='w-5 h-5 text-white rounded bg-[#d1411e] stroke-[2]' onClick={onDecreaseItemQTY} />
                        </button>
                        <div className='rounded text-white font-medium w-5 h-5 flex bg-[#] items-center justify-center text-sm bg-[#d1411e] active:scale-90 '>{cartQuantity}</div>
                        <button className=' w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90' type='button'>
                            <PlusIcon className='w-5 h-5 text-white rounded bg-[#d1411e] stroke-[2]' onClick={onIncreaseItemQTY} />
                        </button>
                    </div>
                </div>
            </div>
            <div className='grid items-center gap-5'>
                <div className='grid items-center justify-center'>
                    <h1 className='text-lg font-medium lg:text-base'>{price[0] * cartQuantity}</h1>
                </div>
                <div>
                    <button type='button' className='rounded p-1 lg:p-0.5 grid items-center bg-[#d1411e] cursor-pointer' onClick={onRemoveItem}>
                        <TrashIcon className='w-5 h-5 text-white'  />
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CartItem