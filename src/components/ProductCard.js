import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'
import { Link } from 'react-router-dom'
import { ProductDetails } from './ProductDetails'
import { products } from 'reducers/products'

export const ProductCard = ({ product }) => {

  const dispatch = useDispatch()

  return (
    <div className='product-card'>
      {/* <img>image</img> */}
      <h3>{product.title}</h3>
      <p>Info about product</p>
      <h2>{product.price}:-</h2>
      <button
        type='button'
        onClick={() => dispatch(cart.actions.addItem(product))}>
        ADD TO CART
      </button>
      {/* <Link
        to="/product/:productId">
        <ProductDetails />
      </Link> */}
    </div>
  )
}