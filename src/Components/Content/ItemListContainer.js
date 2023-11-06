import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Item.css'
import Productos from '../../Json/productos.json'
import ItemList from './ItemList';

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
    <div>
      <ItemList item={item}/>
    </div>
  )
}

export default ItemListContainer;