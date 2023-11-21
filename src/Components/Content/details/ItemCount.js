import React, { useEffect, useState } from 'react';
import './Details.css'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));
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

    useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);
 
    return (
        <div className='count-container'>
            <p>Stock disponible: {stock}</p>
            <p>Cantidad seleccionada: {count}</p>
            <div className='count-child'>
            <button className='perfil-boton-detail' onClick={handleDecrement}>-</button>
            <button className='perfil-boton-detail' onClick={handleIncrement}>+</button> 
            </div>
            <div>
				<button disabled={stock <= 0 || count < 1} onClick={() => onAdd(count)} className="operacion">
					Agregar al carrito
				</button>
			</div>
        </div>
    );
};

export default ItemCount;
