import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { cart } from 'reducers/cart'

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <div className='product-card'>
      <Link
        to={`/products/${product.id}`}>

        {product.img === '' ? '' : <img className='product-img' src={product.img} alt={product.title} />}
        <h3>{product.title}</h3>
        <p className='product-alt-name'>({product.altName})</p>
        <p>{product.info}</p>
      </Link>

      <div className='price-section'>
        <h2>{product.price}:-</h2>
        <button
          className='add-to-cart-btn'
          type='button'
          onClick={() => dispatch(cart.actions.addItem(product))}>
          LÄGG I VARUKORG
         </button>
      </div>
    </div>
  )
}