import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const FixedCartPreview = () => {

  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))

  const sumProducts = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.quantity)), 0)
  ))

  if (sumProducts === 0) {
    return (null)
  }

  return (
    <div>
      <Link
        to='/cart'>
        <div className='fixed-cart'>
          <p>({sumProducts})</p>
          <p>{totalPrice}:-</p>
        </div>
      </Link>
    </div>
  )
}