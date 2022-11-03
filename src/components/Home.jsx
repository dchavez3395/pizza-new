import React from 'react'
import { pizzas, starters } from '../../data'
import Hero from './Hero'
import Menu from './Menu'

const Home = () => {
  return (
    <main className='relative gap-16 flex  flex-col'>      
        <Hero />
        <Menu endpoint={pizzas} starters={starters} />
    </main>
  )
}

export default Home
