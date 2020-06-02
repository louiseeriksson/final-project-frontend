import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ProductCard } from './ProductCard'

export const ProductPage = () => {

  const allProducts = useSelector((store) => store.products)

  return (
    <div className='products'>
      {allProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      {/* add link to product details */}
    </div>
  )
}