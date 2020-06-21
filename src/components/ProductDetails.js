import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchDetails } from 'reducers/products'

export const ProductDetails = () => {

  const params = useParams()

  const dispatch = useDispatch()
  useEffect(() => {
    console.log("useEffect")
    dispatch(fetchDetails(params.id))
  }, [dispatch, params.id])

  const product = useSelector((state) => state.products.details)

  return (
    <div className='page-wrapper'>
      <h1 className='page-title'>{product.title}</h1>

      {product.img === '' ? '' : <img className='product-img' src={product.img} alt={product.title} />}
      <h3>{product.title}</h3>
      <h5>{product.altName}</h5>
      <p>{product.info}</p>
      <p>{product.price}:-</p>

      {/* add add-to-cart-button!! */}


    </div>
  )
}