import React from 'react'
import { useSelector } from 'react-redux'

export const FixedCartPreview = () => {

  // const products = useSelector((store) => store.cart.items)
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))

  return (
    <div>
      <div className='fixed-cart'>

        {/* how to show the sum of the items? */}
        <p> summering av varukorg</p>
        <p>{totalPrice}:-</p>
      </div>
    </div>
  )
}