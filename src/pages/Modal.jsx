import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ApiService from '../libs/ApiService'
import { productoImage } from '../libs/AuthHelpers'
import { useState } from 'react'

export const Modal = () => {
    const [product, setproduct] = useState(null)
    const navigate = useNavigate()
    const cambiarRuta = (ruta) => {
        navigate(ruta)
    }

    const { id } = useParams()
    useEffect(() => {
        addProduct()
    }, [])

    const addProduct = async () => {
        try {
            const { data } = await ApiService.get(`/product/${id}`)
            setproduct(data)
        } catch (error) {
            console.log(error);
        }
    }
    if (!product) {
        return <p>Cargando...</p>
    }
    return (
        <div className="modalContainer">
        <img src={productoImage(product)} alt="" className="imgModal" />
        <div className="cajaModal">
          <h2>{product.name} fue agregado al carrito</h2>
          <img src="/comprobado.png" alt="comprobado" className="imgComprobado" />
        </div>
        <div className="buttonContainer">
          <button className="modalButton" onClick={() => cambiarRuta('/carrito')}>
            Ir al carrito
          </button>
          <button className="modalButton secondary" onClick={() => cambiarRuta('/')}>
            Seguir comprando
          </button>
        </div>
      </div>
          
    )
}
