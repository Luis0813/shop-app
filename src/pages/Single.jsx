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
    <div className="contentInfo">
      <img src={productoImage()} alt="" className="imageInfo" />
      <div className="infoProduct">
        <h2 className="titleInfo">{product.name}</h2>
        <p>{product.description}</p>
        <div className="cajaCount">
          <button className="btnCount">-</button>
          <input type="number" defaultValue={1} className="count" />
          <button className="btnCount">+</button>
        </div>
        <button>Add Car</button>
      </div>
    </div>
  )
}
