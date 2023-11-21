import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import './Details.css';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [hamburger, setHamburger] = useState([]);

  useEffect(() => {
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, 'products', id);
    getDoc(queryDoc).then((res) => setHamburger({id: res.id, ...res.data()}));
  }, [id]);

  return (
    <div>
      {hamburger ? (
        <ItemDetail hamburger={hamburger} />
      ) : (
        <div className='loadingContainer'>
          <p className='loading'>Cargando detalles...</p>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
