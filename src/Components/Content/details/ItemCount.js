import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Details.css';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));
    const notify = () => toast("Producto añadido!");
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

    const handleAddToCart = () => {
        if (stock > 0 && count > 0) {
            onAdd(count);
            notify(); // Llama a la función notify para mostrar la notificación
        } else {
            toast.error('No se puede agregar al carrito. Verifica el stock y la cantidad.');
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
            <div>
                <button disabled={stock <= 0 || count < 1} onClick={handleAddToCart} className="detail-close-detail">
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;