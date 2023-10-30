import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import '../Card.css';

const CardDetail = ({ hamburger }) => {
  console.log(hamburger);
  const [stock, setStock] = useState(hamburger.stock);
  
  return (
    <div className='perfil-card-container-detail'>
      <div className='perfil-card-detail'>
        <div className='perfil-image-container-detail'>
          <img src={hamburger.imagen} alt={hamburger.nombre} className='perfil-img-detail' />
        </div>

        <h2 className='perfil-titulo-detail'>{hamburger.nombre}</h2>

        <p className='perfil-descripcion-detail'>{hamburger.descripcion}</p>

        <div className='perfil-precio-boton-detail'>
          <span className='perfil-precio-detail'>
            Precio: ${hamburger.precio.toFixed(2)}
          </span>


          <ItemCount stock={stock}/>


          <div className='perfil-boton-detail'>
            <span>Pedir</span>
          </div>
        </div>
        <div className='detail-open-container-detail'>
          <Link to="/hamburguesas" className="detail-close-detail">
            Cerrar
          </Link>
        </div>
      </div>
    </div>

  );
};

export default CardDetail;
