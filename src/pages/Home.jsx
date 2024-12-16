import { useEffect, useState } from 'react';
import { Card } from '../components/card';
import ApiService from '../libs/ApiService';
export const Home = () => {
  const [products, setproducts] = useState([])

  useEffect(() => {
    listProduct()
  }, [])
  const listProduct = async () => {
    try {
      const response = await ApiService.get("/product")
      setproducts(response.data)      
    } catch (error) {
      console.error(error);
    }
  }

  
  return (
    <>
      <div key={Date.now()} className='contentCard'>
        {products.map((producto) => (
          <Card key={producto.id} producto={producto} />
        ))}
      </div>
    </>
  );
};
