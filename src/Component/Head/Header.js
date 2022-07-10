import React, { useState } from 'react'
import "./Header.css"
import logo from "../pic/logo3.png"

const Header = () => {
    // when scroll header at top position
    window.addEventListener("scroll",function(){
        const header = document.querySelector(".header")
        header.classList.toggle("active",window.scrollY > 100)
    })

    // toggle menu
    const[Mobail , setMobail] = useState(false)



  return (
    <>
    <header className='header'>
        <div className='container d_flex'>
    <div className='logo'>
        <img className='lg' src = {logo} alt=''/>
    </div>
        <header className='navlink'>
            {/* <ul className='link f_flex uppercase'> */}
                <ul className= {Mobail ?  "nav-links-mobils" : "link f_flex uppercase"} onClick = {() => setMobail(false)}>

                <li><a href="#home">home</a></li>
                <li><a href="#features">features</a></li>
                <li><a href="#portfolio">portfolio</a></li>
                <li><a href="#clients">clients</a></li>
                <li><a href="#contact">contact</a></li>
                <li><button className='home-btn'>Buy Now</button></li>
            </ul>

            <button className='toggle' onClick={() => setMobail(!Mobail)}>
                {
                        Mobail ? <i className='fas fa-times close home-btn'></i> :  <i className='fas fa-bars open'></i>
                }                
            </button>
        </header>
        </div>
        </header>

        <section className='demo'></section>

    </>
  )
}

export default Header