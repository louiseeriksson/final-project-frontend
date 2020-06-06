import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchProducts } from 'reducers/products'
import { ProductCard } from './ProductCard'
import { LoadingIndicator } from './LoadingIndicator'

export const ProductPage = (props) => {

  useEffect(() => {
    console.log("useEffect")
    // fetchProducts()
    dispatch(props.actions.fetchProducts)
  })

  // const allProducts = useSelector((store) => store.products)
  const allProducts = useSelector((state) => state.products.all)
  console.log(allProducts)

  return (
    <div className='products'>
      <LoadingIndicator />
      {/* 
      {allProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
    </div>
  )
}