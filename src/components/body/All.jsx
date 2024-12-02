import React, { useState, useEffect } from 'react';
import { Card } from './card/Card';
import { ProductsFilter } from '../Hooks/ProductsFilter';

export const All = ({ searchValue }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const filteredProducts = ProductsFilter(searchValue);
    setProductos(filteredProducts);
  }, [searchValue]); 

  return (
    <div key={Date.now()} className='contentCard'>
      {productos.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

