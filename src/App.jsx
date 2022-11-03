import React from 'react'
import { Cart, Footer, Home, Navbar } from './components'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Pizza from './components/pages/Pizza'
import { pizzas, starters } from '../data'

const App = ({id}) => {
  return (
    <Router>      
    <Cart />
      <Navbar  /> 
      <Routes>
        <Route path='/' element={<Home />} exact></Route>
        <Route path={`/pizza/:id`} element={<Pizza pizzas={pizzas}  />} exact></Route>
      </Routes>
      <Footer  /> 
    </Router>
  )
}

export default App
