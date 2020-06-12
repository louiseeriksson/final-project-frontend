import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'
import { products } from 'reducers/products'

export const CartItem = ({ product }) => {

  const dispatch = useDispatch()

  return (
    <div className='cart-item'>
      <div className='info'>
        <h2 className='cart-item-name'>{product.title}</h2>
        <p className='cart-item-alt-name'>{product.altName}</p>
        <p className='price'>{product.price}:-</p>
      </div>

      <span className='actions'>
        <h2 className='quantity'>x{product.quantity}</h2>
        <div>
          <button type='button' className='cart-item-button' onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>
          <button type='button' className='cart-item-button' onClick={() => dispatch(cart.actions.addItem(product))}>+</button>
        </div>
      </span>
    </div>
  )
}