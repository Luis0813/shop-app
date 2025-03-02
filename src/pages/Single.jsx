import { useEffect, useState } from "react"
import  PrymaryButton  from "../components/PrymaryButton";
import { useNavigate, useParams } from "react-router-dom"
import ApiService from "../libs/ApiService"
import { priceDiscount, productoImage } from "../libs/AuthHelpers"
export const Single = ({ user }) => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [cantidad, setCantidad] = useState(1)
  const navigate = useNavigate()
  useEffect(() => {
    showProduct()
  }, [])
  const showProduct = async () => {
    try {
      const response = await ApiService.get(`/product/${id}`)
      setProduct(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  const handleInputChange = (event) => {
    setCantidad(Number(event.target.value));
  };

  const agregarAlCarrito = (product) => {
    if (!user) {
      return navigate('/singIn')
    }
    const response = ApiService.post("/cart", {
      quantity: cantidad,
      product_id: product.id
    })
    navigate(`/modal/${product.id}`)
  };

  if (!product) {
    return <p>Cargando...</p>
  }

  return (
    <div className="content-info urban-detail">
      <img src={productoImage(product)} alt={product.name} className="image-info" />
      <div className="info-product">
        <h2 className="title-info">{product.name}</h2>
        <p className="description-info">{product.description}</p>
        <div>
          <h3>Tallas</h3>
          <input type="radio" id="m" name="talla" />
          <label htmlFor="m">M</label>
          <input type="radio" id="s" name="talla" />
          <label htmlFor="s">S</label>
          <input type="radio" id="l" name="talla" />
          <label htmlFor="l">L</label>

          <h3>Colores</h3>
          <input type="radio" id="negro" name="color" />
          <label htmlFor="negro">Negro</label>
          <input type="radio" id="azul" name="color" />
          <label htmlFor="azul">Azul</label>
          <input type="radio" id="rojo" name="color" />
          <label htmlFor="rojo">Rojo</label>
        </div>
        <div className="caja-count">
          <button className="btn-count" onClick={() => setCantidad(cantidad - 1)}>-</button>
          <input type="number" value={cantidad} className="count" onChange={handleInputChange} />
          <button className="btn-count" onClick={() => setCantidad(cantidad + 1)}>+</button>
        </div>
        <div className="price-info">
          <span className="label">Price:</span>
          <span className="value">${priceDiscount(product.discount_price, product.price) * cantidad}</span>
        </div>
        <div onClick={()=>agregarAlCarrito(product)} ><PrymaryButton>Add to Car</PrymaryButton></div>
      </div>
    </div>
  )
}
