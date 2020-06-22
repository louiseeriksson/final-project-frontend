import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { fetchDetails } from 'reducers/products'
import { cart } from 'reducers/cart'


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

      <Link to='/products'>
        <h5 className='go-back-arrow'>⬅︎ Tillbaka till produkterna</h5>
      </Link>

      <h1 className='page-title'>{product.title}</h1>
      <div className='product-details-wrapper'>
        {product.img === '' ? '' : <img className='product-img' src={product.img} alt={product.title} />}
        <h3>{product.title}</h3>
        <h5>{product.altName}</h5>
        <p>{product.info}</p>
        <h5>{product.price}:-</h5>
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