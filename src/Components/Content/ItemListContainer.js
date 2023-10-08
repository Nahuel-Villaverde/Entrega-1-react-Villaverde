import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({imagen, nombre, descripcion, precio}) => {
  return (
    <div className='perfil-card'>
        <div className='perfil-image-container'>
        <img src={imagen} alt='imagen de hamburguesa' className='perfil-img'/>
        </div>
        <h2 className='perfil-titulo'>
            {nombre}
        </h2>
        <p className='perfil-descripcion'>
            {descripcion}
        </p>
        <div className='perfil-precio-boton'>
          <span className='perfil-precio'>
              ${precio}
          </span>
          <div className='perfil-boton'>
            <span>Pedir</span>
          </div>
        </div>
    </div>
  )
}

export default ItemListContainer