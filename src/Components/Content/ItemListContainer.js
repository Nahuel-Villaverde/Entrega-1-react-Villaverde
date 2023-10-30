import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';
import './Card.css'
import Productos from '../../Json/productos.json'

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(id ? Productos.filter(item => item.categoria === id) : Productos)
          }, 2000);
        });
        setItem(data);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchData();
  }, [id])

  return (
    <div className="perfil-card-container">
      {item ? (item.map((h) =>
        <Card key={h.id} item={h} />
      )) : (<p>Cargando Hamburguesas...</p>)}
    </div>
  )
}

export default ItemListContainer;