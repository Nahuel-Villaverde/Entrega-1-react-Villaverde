import React from 'react'
import './NavBar.css';
import CartWidget from './CartWidget.js';


const NavBar = () => {
  return (
    <div className='navbar'>
      <span className="nombre-marca">SaborBurger</span>
      <ul>
        <li>Home</li>
        <li>Burgers</li>
        <li>About us</li>
        <li>Contact us</li>
      </ul>
      <CartWidget />
    </div>
  )
}

export default NavBar