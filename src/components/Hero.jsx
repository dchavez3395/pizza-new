import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const Hero = () => {
  
    const images = [
        "https://raw.githubusercontent.com/dchavez3395/pizza-restaurant/main/public/assets/featured.png",
        "https://github.com/dchavez3395/pizza-restaurant/blob/main/public/assets/featured2.png?raw=true",
        "https://github.com/dchavez3395/pizza-restaurant/blob/main/public/assets/featured3.png?raw=true",
    ];

    const splideOptions = {
      perPage: 1,
      perMove: 1,
      type: 'loop',
      rewind: true,
      pagination: true,
    };
  return (
    <>
        <div className='swiper-container z-0 swiper-container md:h-auto overflow-hidden  '>
             <Splide options={splideOptions} >
             {images.map((image, index )=> (
              <SplideSlide  key={index} className='flex h-screen 2xl:h-[90vh] w-full  '>
                <div className='h-full w-full object-cover items-center justify-center m-auto' key={index}>
                    <img src={image} alt='' className='object-contain m-auto pt-[65%] md:pt-[40%] lg:pt-0'/>
                </div>
              </SplideSlide>
            ))}
             </Splide>
        </div>
    </>
  )
}

export default Hero