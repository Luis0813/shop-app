import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ApiService from '../libs/ApiService';
import { priceDiscount, productoImage } from '../libs/AuthHelpers';
export const Carrito = ({ user }) => {
  const [carrito, setCarrito] = useState([])
  console.log(carrito);
  
  const navigate = useNavigate()
  const cambiarRuta = (ruta) => {
    navigate(ruta)
  }
  useEffect(() => {
    if (user) {
      indexCart()
    }
  }, [])

  if (!user) {
    return (
      <div className="profileContainer">
        <p>No se encontró usuario. Por favor, regístrate.</p>
        <button className='singInBtn' onClick={() => cambiarRuta('/singIn')}>singIn</button>
      </div>
    );
  }

  const indexCart = async () => {
    try {
      const { data } = await ApiService.get("/cart")
      setCarrito(data)
    } catch (error) {
      console.log(error);
    }
  }
  if (carrito.length  < 1) {
    return (
      <div className="profileContainer">
        <p>No hay productos en el carrito😕</p>
      </div>
    );
  }
  const deleteProduct = async (id) => {
    try {
      const response = await ApiService.delete(`/cart/${id}`)
      indexCart()
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <>
      <div>
        <div>
          {carrito.map(producto => {
            const { product } = producto

            return <div key={product.updated_at} className="cartItem">
              <div className="cartItemImage">
                <img src={productoImage(product)} alt={product.name} />
              </div>
              <div className="cartItemDetails">
                <p className="cartItemName">{product.name}</p>
                <p className="cartItemPrice">Precio por unidad: ${product.price}</p>
                <p>cantidad: {producto.quantity}</p>
                {product.discount_price && (
                  <p className="cartItemDiscountPrice">
                    Precio con descuento: ${priceDiscount(product.discount_price, product.price)}
                  </p>
                )}
                <button onClick={() => deleteProduct(product.id)} className="cartItemRemoveBtn">Eliminar del carrito</button>
              </div>
            </div>
          })}
        </div>
        {carrito.length > 0 ? <div>
          <button className='singInBtn' onClick={() => cambiarRuta('/hacer_orden')}>Hacer la orden</button>
        </div> : null}
      </div>
    </>
  )
}
