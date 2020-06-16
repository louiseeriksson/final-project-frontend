import React from 'react'
import { useSelector } from 'react-redux'

export const FixedCartPreview = () => {


  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))

  // const sumProducts = useSelector((store) => store.cart.items)

  return (
    <div>
      <div className='fixed-cart'>

        {/* if empty = dont show the cart */}

        {/* how to show the sum of the items? */}
        {/* <p> {sumProducts}</p> */}

        <p>{totalPrice}:-</p>
      </div>
    </div>
  )
}