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

      <div className='product-details-wrapper'>
        {product.img === '' ? '' : <img className='product-img' src={product.img} alt={product.title} />}

        <h1 className='page-title'>{product.title}</h1>
        <p className='product-alt-name'>({product.altName})</p>
        <p>{product.info}</p>
        <h3>{product.price}:-</h3>

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