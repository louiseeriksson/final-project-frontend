import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import { products } from 'reducers/products'

// import { ProductDetails } from './ProductDetails'
import { cart } from 'reducers/cart'

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <div className='product-card'>
      {/* <img>image</img> */}
      <Link
        to={`/products/${product.id}`}>

        <h3>{product.title}</h3>
        <h5>{product.altName}</h5>
        <p>{product.info}</p>

        <div className='price-section'>
          <h2>{product.price}:-</h2>

          <button
            className='add-to-cart-btn'
            type='button'
            onClick={() => dispatch(cart.actions.addItem(product))}>
            LÄGG I VARUKORG
         </button>
        </div>
      </Link>
    </div>
  )
}