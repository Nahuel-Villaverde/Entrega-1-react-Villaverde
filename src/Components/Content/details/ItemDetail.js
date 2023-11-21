import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCartContext } from '../../Context/CartContext';
import '../Item.css';

const ItemDetail = ({ hamburger }) => {
  console.log(hamburger);

  const[goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext()
  const onAdd = (quantity) =>{
   setGoToCart(true);
   addProduct(hamburger, quantity);
  }
  
  return (
    <div className='perfil-card-container-detail'>
      <div className='perfil-card-detail'>
        <div className='perfil-image-container-detail'>
          <img src={hamburger.img} alt={hamburger.title} className='perfil-img-detail' />
        </div>

        <h2 className='perfil-titulo-detail'>{hamburger.title}</h2>

        <p className='perfil-descripcion-detail'>{hamburger.description}</p>

        <div className='perfil-precio-boton-detail'>
          <span className='perfil-precio-detail'>
            Precio: ${hamburger.price}
          </span>


          {goToCart ? <Link to='/cart'>Ir al carrito</Link> :<ItemCount stock={hamburger.stock} initial={0} onAdd={onAdd} />}


          <div className='perfil-boton-detail'>
            
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

export default ItemDetail;
