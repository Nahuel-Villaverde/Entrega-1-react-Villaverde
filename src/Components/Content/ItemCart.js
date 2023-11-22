import React from 'react';
import { useCartContext } from '../Context/CartContext.js';
import './Item.css';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCartContainer'>
            <div className='itemCart'>
                <div className='cart-image-container'>
                    <img src={product.img} alt={product.title} className='cart-img-detail' />
                </div>
                <div className='cart-text-container'>
                    <h2 className='cart-titulo-detail'>{product.title}</h2>
                    <div className='cart-detail-text-container'>
                        <p>Cantidad: {product.quantity}</p>
                        <p>Precio u.: $ {product.price}</p>
                        <p>Subtotal: ${product.quantity * product.price}</p>

                        <button className='cart-close' onClick={() => removeProduct(product.id)}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCart