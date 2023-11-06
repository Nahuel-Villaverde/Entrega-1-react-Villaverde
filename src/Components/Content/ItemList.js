import React from 'react'
import Item from './Item';


const ItemList = ({item}) => {
  return (
    <div className="perfil-card-container">
      {item ? (item.map((h) =>
        <Item key={h.id} item={h} />
      )) : (<p>Cargando Hamburguesas...</p>)}
    </div>
  )
}

export default ItemList