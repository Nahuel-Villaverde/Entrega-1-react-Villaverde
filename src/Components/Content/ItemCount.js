import React, { useState, useEffect } from 'react';
import './Details.css'

const CardCount = ({stock}) => {
    const [count, setCount] = useState(1);
    console.log(stock);
     
    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
 
    return (
        <div className='count-container'>
            <p>Stock disponible: {stock}</p>
            <p>Cantidad seleccionada: {count}</p>
            <div className='count-child'>
            <button className='perfil-boton-detail' onClick={handleDecrement}>-</button>
            <button className='perfil-boton-detail' onClick={handleIncrement}>+</button> 
            </div>
        </div>
    );
};

export default CardCount;
