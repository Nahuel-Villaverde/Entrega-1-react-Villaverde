import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardDetail from './CardDetail';
import Productos from '../../../Json/productos.json';
import './Details.css';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [hamburger, setHamburger] = useState(null);

  useEffect(() => {
    const fetchHamburgerById = async () => {
      try {
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            const selectedHamburger = Productos.find((item) => item.id === parseInt(id));
            resolve(selectedHamburger);
          }, 2000);
        });

        setHamburger(data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    if (id) {
      fetchHamburgerById();
    }
  }, [id]);

  return (
    <div>
      {hamburger ? (
        <CardDetail hamburger={hamburger} />
      ) : (
        <div className='loadingContainer'>
        <p className='loading'>Cargando detalles...</p>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
