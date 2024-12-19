import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ApiService from "../libs/ApiService"

export const CardSelect = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  useEffect(() => {
    showProduct()
  }, [])
  const showProduct = async () => {
    try {
      const response = await ApiService.get(`/product/${id}`)
      setProduct(response.data)
      console.log(response.data);

    } catch (error) {
      console.error(error);
    }
  }

  const productoImage = () => {
    if (product.image == null) {
      return product.image = "/public/default.jpg"
    }
    else {
      return product.image
    }
  }
  if (!product) {
    return <p>Cargando...</p>
  }

  return (
    <div className="content-info urban-detail">
      <img src={productoImage()} alt={product.name} className="image-info" />
      <div className="info-product">
        <h2 className="title-info">{product.name}</h2>
        <p className="description-info">{product.description}</p>
        <div className="caja-count">
          <button className="btn-count">-</button>
          <input type="number" defaultValue={1} className="count" />
          <button className="btn-count">+</button>
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  )
}
