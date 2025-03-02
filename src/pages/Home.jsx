import { useEffect, useState } from 'react';
import { Card } from '../components/card';
import ApiService from '../libs/ApiService';
import { Sidebar } from '../components/layout/Sidebar';
export const Home = ({ searchValue }) => {
  const [products, setproducts] = useState([]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    listProduct();
  }, [searchValue, filter]);

  const listProduct = async () => {
    try {
      const { data } = await ApiService.get(
        `/product?search=${searchValue}&filter=${filter}`
      );
      setproducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='bodySidebar'>
        <Sidebar setFilter={setFilter} />
        <div key={Date.now()} className='contentCard'>
          {products.map((producto) => (
            <Card key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </>
  );
};
