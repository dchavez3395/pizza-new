import React from 'react'
import { useDispatch } from 'react-redux'
import { setAddItemToCart, setOpenCart } from '../app/CartSlice'
import { Link } from "react-router-dom"

const MenuItem = ({name, image, price, description, id}) => {
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
        <div className='justify-items-center items-center relative h-[30rem] grid gap-4 md:gap-8 mt-7 '>
                      <div className=' 2xl:w-[20rem] md:w-[15rem] w-full shadow-lg rounded-xl px-12 lg:px-1 py-4 items-center flex flex-col gap-3 m-auto justify-center text-center group'>
                            <img src={image} className='lg:h-[14rem] md:h-[11rem] w-auto m-auto group-hover:scale-105 transition-all duration-700 ease-in-out group-hover:-rotate-[60deg]' alt="" />
                            <div className='flex flex-col gap-1'>
                              <h1 className='text-[#d1411e] font-bold text-xl '>{name}</h1>
                              <span className='font-bold text-lg text-gray-600'>${price[0]}</span>
                              <p>{description}</p>
                              <div className='flex flex-row gap-4 justify-center'>
                                  <button className='text-white button-theme bg-[#d1411e] shadow shadow-sky-200' onClick={() => {onAddToCart(); onCartToggle();}}>
                                      <img src="https://raw.githubusercontent.com/dchavez3395/pizza-new/main/src/assets/cart.png" className='h-[22px] w-[22px] ' alt="" />
                                  </button>
                                  <Link to={`/pizza/${id}`}>
                                  <button className='text-white button-theme bg-[#d1411e] shadow shadow-sky-200'>customize</button>
                                  </Link>
                              </div>
                            </div>
                    </div>
        </div>
    </>
  )
}

export default MenuItem
