
export const setToken = (token) => {
  localStorage.setItem('token', token)
}
export const getToken = () => {
  return localStorage.getItem('token')
}
export const removeToken = () => {
  localStorage.removeItem('token')
}
export const priceDiscount = (discount_price, price) => {
  if (discount_price > 1) {
    let discount = discount_price * price
    let priceWithDiscount = discount / 100
    return price - priceWithDiscount
  } else {
    let priceWithDiscount = price
    discount_price = 0
    return priceWithDiscount, discount_price
  }
}

export const productoImage = (product) => {
  if (product.image == null) {
    return product.image = "/public/default.jpg"
  }
  else {
    return product.image
  }
}