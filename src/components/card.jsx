import { useNavigate } from 'react-router-dom'
import { priceDiscount, productoImage } from '../libs/AuthHelpers'  
export const Card = ({ producto }) => {

  const navigate = useNavigate()

  const goToSingle = () => {
    navigate(`/product/${producto.id}`)
  }


  return (
    <>
      <section className="articles">
        <article>
          <div className="article-wrapper urban-style">
            <figure>
              <img src={productoImage(producto)} alt="Product" className="urban-image" />
            </figure>
            <div className="article-body">
              <h2 className="urban-title">{producto.name}</h2>
              <p className="urban-description">
                {producto.description}
              </p>
              <a className="urban-read-more" onClick={goToSingle}>
                <span className="sr-only">Ver mas</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="urban-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <h3 className="urban-price">Price: {producto.discount_price > 0 ? <i className='urban-discount'>{producto.discount_price}% / </i> : null}{priceDiscount(producto.discount_price,producto.price)}$</h3>
              {producto.discount_price > 0 ? <h3 className='urban-last-price'>Last Price: {producto.price}$</h3> : null}
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
