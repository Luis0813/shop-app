import React, { useState, useEffect } from 'react';
import { Card } from './card/Card';
import axios from 'axios';


export const All = ({ searchValue }) => {
  const [products, setproducts] = useState([])

  useEffect(() => {
    const newProducts = products.filter((produc) => {
      return produc.title.includes(searchValue);
    });
    setproducts(newProducts);
  }, [searchValue]); 

  const listProduct = async ()=>{
      try {
          const url = 'http://localhost:3000/product'
          const response = await axios.get(url)  
          setproducts(response.data)
          
      } catch (error) {
          console.error(error);    
      }
  }


  const ShowProduct = async ()=>{
      try {
       const url = "http://localhost:3000/product/1"
       const response  = await axios.get(url)
       setproducts(response.data)
       console.log(products);
       
      } catch (error) {
        console.error(error);
      }
  }
  useEffect(() => {
    listProduct() 
  }, [])
  
  return (
    <>
    <div key={Date.now()} className='contentCard'>
      {products.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
    <button onClick={ShowProduct}>mostrar producto</button>
    </>
  );
};

