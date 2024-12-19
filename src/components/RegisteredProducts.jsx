
export const RegisteredProducts = ({product}) => {

  const discountNull =()=>{
    if (product.discount_price == null) {
     product.discount_price = 0
    }
    return product.discount_price
  }
  return (
    <div className="cajaUser">
            <h3>{product.id}</h3>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{discountNull()}%</p>
    </div>
  )
}
