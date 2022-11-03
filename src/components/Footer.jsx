import React from 'react'

const Footer = () => {
  return (
    <>
    <div className=' bg-[#222]  relative  flex flex-col h-auto lg:flex-row items-center  lg:items-start'>
        <div className=' flex relative '>
            <img src="/../src/assets/bg.png" className='h-full hidden lg:flex' alt="" />
        </div>
        <div className='py-12 px-20 space-between text-center  lg:text-left  flex flex-col lg:flex-row gap-16'>
            <div>
                <h2 className='text-2xl text-[#d3d3d3] lg:w-[80%]'>PERFECT SLICE, EVERY TIME. TRY PRIMAVERA PIZZA TODAY.</h2>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-[#b7903c] font-bold text-xl'>LOCATIONS</h1>
                <p className='text-gray-300'>
                    234 Wellington 
                    <br /> Winnipeg, MB
                    <br /> (204) 387-2387                   
                </p>
                <p className='text-gray-300'>
                    234 Wellington 
                    <br /> Winnipeg, MB
                    <br /> (204) 387-2387    
                </p>
                <p className='text-gray-300'>
                    123 18th st 
                    <br /> Brandon, MB
                    <br /> (204) 123-6643 
                </p>
                <p className='text-gray-300'>
                    775 Main 
                    <br /> Portage La Prairie, MB
                    <br /> (204) 356-8864
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-[#b7903c] font-bold text-xl'>HOURS</h1>
                <p className='text-gray-300'>MONDAY TO FRIDAY <br />9:00 AM - 8:00 PM</p>
                <p className='text-gray-300'>WEEKENDS <br />11:00 AM - 6:00 PM</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer