import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTotalQTY, setOpenCart } from '../app/CartSlice.js';
import { Link } from "react-router-dom"

const Navbar = () => {
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY)

  const onCartToggle = () => {
    dispatch(setOpenCart({
      cartState: true
    }))
  }

  return (
    <>
      <div className='bg-[#d1411e] px-8 py-4 lg:px-12 sticky top-0 flex z-[50] justify-between'>
        <div>
          <Link to='/'>
          <h1 className='cursive text-4xl lg:text-6xl font-bold text-white '>Primavera</h1>
          </Link>
        </div>

        <div className='hidden lg:flex items-center gap-4 text-white pt-3'>
          <h2 className='hover:underline text-xl font-bold underline-offset-4 cursor-pointer'> Homepage</h2>
          <h2 className='hover:underline text-xl font-bold underline-offset-4 cursor-pointer'> Deals</h2>
          <h2 className='hover:underline text-xl font-bold underline-offset-4 cursor-pointer'> Menu</h2>
          <div className='flex flex-row group'>
            <div className='p-[10px] bg-white lg:h-[50px] h-[40px] w-[40px] lg:w-[50px] rounded-full'>
              <img src="/../src/assets/telephone.png" alt="phone-img" className='h-[32px]w-[32px] transitions-theme group-hover:-rotate-[360deg] transition-all duration-[1000ms] ease-in-out cursor-pointer' />
            </div>
            <div className='text-white ml-[20px]'>
              <div className='font-normal lg:text-md'>ORDER NOW</div>
              <div className='font-bold lg:text-xl cursor-pointer'>204-293-29x8</div>
            </div>
          </div>
            <h2 className='hover:underline text-xl font-bold underline-offset-4 cursor-pointer'> Events</h2>
            <h2 className='hover:underline text-xl font-bold underline-offset-4 cursor-pointer'> Blog</h2>
            <h2 className='hover:underline text-xl font-bold underline-offset-4 cursor-pointer'> Contact</h2>
        </div>

        <div className='pt-3'>
          <button type='button' onClick={onCartToggle} className='cursor-pointer'>
            <img src="/../src/assets/cart.png" className='lg:h-[32px] h-[25px] w-[25px] lg:w-[32px]' alt="" />
            <div className={`font-medium absolute top-6 lg:top-6 lg:right-9 right-5 text-[#d1411e] bg-white  shadow lg:w-4 lg:h-4 w-3.5 h-3.5 text-xs lg:text-[0.75rem] leading-tight rounded-full items-center flex justify-center cursor-pointer transition-all duration-300 hover:scale-110`}>{totalQTY}</div>
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar