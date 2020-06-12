import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'

export const Cart = () => {

  const products = useSelector((store) => store.cart.items)
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))

  return (
    <div className='page-wrapper'>
      <h1 className='page-title'>VARUKORG</h1>

      <section className='items'>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </section>

      <div className='total'>
        <h2 className='amount'>TOTALT PRIS: {totalPrice}:-</h2>
        <button className='checkout-button'>GÅ TILL KASSAN</button>
      </div>
    </div>
  )
}