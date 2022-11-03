import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setAddItemToCart, setOpenCart } from '../../app/CartSlice'


const Pizza = ({pizzas}) => {

    let {id} = useParams();

        // price change button
        const [size, setSize] = useState(0);

        useEffect(() => {
            window.scrollTo(0, 0)
          }, []);


              // pizza data
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

// pizza data 

    useEffect(() => {
        pizzas.map(function (pizza) {
            if (pizza?.id === id) {
                setName(pizza.name)
                setImage(pizza.image)
                setPrice(pizza.price)
                setDescription(pizza.description)
            }
        })
    }, [])

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
    
    <div className='xl:px-[20%] lg:px-12 xl:py-24 py-2 h-screen '>
    <div className='flex flex-col lg:flex-row xl:gap-24  lg:h-[80vh]'>
        <div className='flex justify-center align-center h-full'>
            <div className='relative md:w-[30rem] px-8 md:py-16'>
                <img src={image} alt="image" className='w-full' />
            </div>
        </div>
        <div className='px-4  md:px-8 flex gap-3 items-center lg:items-start lg:py-16 flex-col w-full'>
            <h1 className='font-bold uppercase text-2xl leading-0'>{name}</h1>
            <span className='text-[#d1411e] underline underline-offset-4 font-medium text-xl'>{price[size]}</span>
            <p>{description}</p>
            <h3 className='font-bold text-lg'>Choose your size</h3>
            <div className='flex flex-row gap-20 py-2 space-between'>
                <div className='relative flex flex-row cursor-pointer h-[30px] w-[30px]'>
                    <img src="/../src/assets/size.png" alt="pizza-size" onClick={() => setSize(0)} />
                    <span className='text-[11px] absolute bg-[teal] text-white top-[-5px] right-[-30px] px-[5px] rounded'>10 inch</span>
                </div>
                <div className='relative flex flex-row cursor-pointer h-[40px] w-[40px]'>
                    <img src="/../src/assets/size.png" alt="pizza-size" onClick={() => setSize(1)}  />
                    <span className='text-[11px] absolute bg-[teal] text-white top-[-5px] right-[-20px] px-[5px] rounded'>14 inch</span>
                </div>
                <div className='relative flex flex-row cursor-pointer h-[50px] w-[50px]'>
                    <img src="/../src/assets/size.png" alt="pizza-size" onClick={() => setSize(2)} />
                    <span className='text-[11px] absolute bg-[teal] text-white top-[-5px] right-[-20px] px-[5px] rounded'>19 inch</span>
                </div>
            </div>
            <h3 className='font-bold text-lg'>Choose your toppings</h3>
            <div className='flex flex-col lg:flex-row px-4  w-full gap-2'>
                <div className='flex flex-row gap-2'>
                    <input className='lg:h-[20px] h-[30px] lg:w-[20px] w-[30px]' type="checkbox" />
                    <label className='lg:text-sm text-lg font-medium' htmlFor="double">Double Toppings</label>
                </div>
                <div className='flex flex-row gap-2'>
                    <input className='lg:h-[20px] h-[30px] lg:w-[20px] w-[30px]' type="checkbox" />
                    <label className='lg:text-sm text-lg font-medium' htmlFor="cheese">Extra Cheese</label>
                </div>
                <div className='flex flex-row gap-2'>
                    <input className='lg:h-[20px] h-[30px] lg:w-[20px] w-[30px]' type="checkbox" />
                    <label className='lg:text-sm text-lg font-medium' htmlFor="garlic">Garlic Sauce</label>
                </div>
                <div className='flex flex-row gap-2'>
                    <input className='lg:h-[20px] h-[30px] lg:w-[20px] w-[30px]' type="checkbox"/>
                    <label className='lg:text-sm text-lg font-medium' htmlFor="spicy">Spicy Red Sauce</label>
                </div>
            </div>
            <div className='py-2'>
                <input type="number" className='h-[40px] lg:h-[30px] w-[50px] border-solid border-[1px] border-black text-center' defaultValue={1} />
                <button className='bg-[#d1411e] cursor-pointer ml-[10px] h-[40px] lg:h-[34px] font-normal border-none text-sm rounded px-2 text-white' onClick={() => {onAddToCart(); onCartToggle();}}>Add to cart</button>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Pizza
