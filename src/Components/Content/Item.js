import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {

  return (

    <div className='perfil-card'>
      <div className='perfil-image-container'>
        <img src={item.img} alt={item.title} className='perfil-img' />
      </div>

      <h2 className='perfil-titulo'>{item.title}</h2>

      <p className='perfil-descripcion'>{item.description}</p>

      <div className='perfil-precio-boton'>
        <span className='perfil-precio'>
          Precio: ${item.price.toFixed(2)}
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

export default Item

