import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from 'reducers/products'
import { ProductCard } from './ProductCard'
import { LoadingIndicator } from './LoadingIndicator'

export const ProductPage = (props) => {

  const dispatch = useDispatch()
  useEffect(() => {
    console.log("useEffect")
    dispatch(fetchProducts())
  }, [dispatch])

  const allProducts = useSelector((state) => state.products.all)

  return (
    <div className='products'>

      <LoadingIndicator />

      {allProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}