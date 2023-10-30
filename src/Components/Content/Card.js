import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ item }) => {

  return (

    <div className='perfil-card'>
      <div className='perfil-image-container'>
        <img src={item.imagen} alt={item.nombre} className='perfil-img' />
      </div>

      <h2 className='perfil-titulo'>{item.nombre}</h2>

      <p className='perfil-descripcion'>{item.descripcion}</p>

      <div className='perfil-precio-boton'>
        <span className='perfil-precio'>
          Precio: ${item.precio.toFixed(2)}
        </span>
      </div>
      <div className='detail-open-container'>
        <Link to={`/hamburguesas/${item.id}`} className='detail-open'>
          Abrir
        </Link>
      </div>
    </div>

  )
}

export default Card

