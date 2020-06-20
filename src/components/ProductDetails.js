import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from 'reducers/products'

export const ProductDetails = () => {
  const params = useParams()
  console.log(params);

  const productMatch = products.find((product) => product.id === params.id)
  console.log(productMatch);


  return (
    <div className='page-wrapper'>
      <h1 className='page-title'>{products.title}</h1>

      {/* add big image */}
      {/* 
      <h3>{product.title}</h3>
      <h5>{product.altName}</h5>
      <p>{product.info}</p>
      <p>{product.price}</p> */}


    </div>
  )
}