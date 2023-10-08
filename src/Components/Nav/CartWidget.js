import React from 'react'
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="carro">
        <span className="cart-counter">0</span>
        <span className="cart">🛒</span>
    </div>
  )
}

export default CartWidget