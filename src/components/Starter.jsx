import React from 'react'
import { useDispatch } from 'react-redux'
import { setAddItemToCart, setOpenCart } from '../app/CartSlice'

const Starter = ({name, image, price, description, id}) => {
    const dispatch = useDispatch();

    const onAddToCart = () => {
        const item = {name, image, price, description, id}

        dispatch(setAddItemToCart(item))
      }

      const onCartToggle = () => {
        dispatch(setOpenCart({
          cartState: true
        }))
      }

  return (
    <>
        <div className='justify-items-start items-center relative grid gap-4 md:gap-8 mt-7 md:grid-cols-2 lg:grid-cols-3  m-auto rounded-xl py-4 px-5 transition-all duration-700 ease-in-out'>
            <div className=' flex shadow-lg flex-col lg:flex-row  rounded-xl px-4 md:w-[17rem] md:h-[26rem] lg:w-[30rem]  2xl:w-[40rem] lg:h-[12rem] w-fit items-center m-auto justify-center text-center group'>
                <img src={image} className=' m-auto h-[12rem] w-full  2xl:w-[20rem] lg:w-[14rem] 2xl:h-full py-1 group-hover:scale-105 transition-all duration-700 ease-in-out hover:scale-105' alt="image" />
                <div className='flex flex-col px-4 py-2 gap-1'>
                            <h1 className='text-[#d1411e] font-bold text-xl '>{name}</h1>
                            <span className='font-bold text-lg text-gray-600'>$ {price}</span>
                        <p>{description}</p>

                    <div className='flex lg:flex-row flex-col gap-4 justify-center'>
                            <button className='text-white button-theme bg-[#d1411e] mt-1 shadow shadow-sky-200' onClick={() => {onAddToCart(); onCartToggle();}}>
                                <p>Quick Add</p>
                            </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Starter
