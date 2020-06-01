import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductDetails } from './ProductDetails'

export const ProductCard = () => {
  return (
    <div>
      {/* <img>image</img> */}
      <h3>Product Name</h3>
      <p>Info about product</p>
      <h2>200 kr</h2>
      {/* <Link
        to="/product/:productId">
        <ProductDetails />
      </Link> */}
    </div>
  )
}