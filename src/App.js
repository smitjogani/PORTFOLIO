import React from 'react'
import Header from './Component/Head/Header'
import './App.css'
import Home from './Component/Hero/Home'
import Features from './Component/Features/Features'
import Porfolio from './Component/Porfolio/Porfolio'
import Testimonial from './Component/Testimonial/Testimonial'
import Contact from './Component/Contact/Contact'

const App = () => {
  return (
    <>

      <Header/>
      <Home />
      <Features />
      <Porfolio />
      <Testimonial/>
      <Contact/>      
    </>
  )
}

export default App