import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'

export const Cart = () => {

  const products = useSelector((store) => store.cart.items)
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))

  return (
    <section className='cart'>
      <div className='total'>
        <span>Image?</span>
        <div className='amount'>Total price: {totalPrice}:-</div>
      </div>
      <ul className='items'>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>

    </section>
  )
}