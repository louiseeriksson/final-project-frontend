import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'
import { products } from 'reducers/products'

export const CartItem = ({ product }) => {

  const dispatch = useDispatch()

  return (
    <div>
      <span>image</span>
      <div className='info'>
        <p className='quantity'>x{product.quantity}</p>
        <p className='price'>{product.price}:-</p>
      </div>

      <span className='actions'>
        <button type='button' onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>
        <button type='button' onClick={() => dispatch(cart.actions.addItem(product))}>+</button>
      </span>
    </div>
  )
}