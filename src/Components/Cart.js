import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './Context/CartContext';
import ItemCart from '../Components/Content/ItemCart';
import '../Components/Content/Item.css'

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className='cart-container'>
        <p className='totalPrice'>No hay elementos en el carrito</p>
        <Link to="/" className='hacer-compra'>Hacer compras</Link>
      </div>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}

      <div className='cart-container'>
        <p className='totalPrice'>total: $ {totalPrice().toFixed(2)}</p>

        <div className='finalizar-container'>
          <Link to="/checkout">
            {' '}
            <button className="finalizar-btn">Finalizar Compra</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;