import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from './ProductCard'

export const ProductPage = () => {
  return (
    <div>
      <Link
        to="/product">
        <ProductCard />
      </Link>
      <Link
        to="/product">
        <ProductCard />
      </Link>
      <Link
        to="/product">
        <ProductCard />
      </Link>
      <Link
        to="/product">
        <ProductCard />
      </Link>
      <Link
        to="/product">
        <ProductCard />
      </Link>
      <Link
        to="/product">
        <ProductCard />
      </Link>
    </div>
  )
}