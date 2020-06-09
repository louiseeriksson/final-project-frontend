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

      <h2>Hej! Här är har vi samlat dina varor. Beställ innan kl 18 så skickar vi din beställning redan dagen efter 🌱</h2>

      <section className='items'>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </section>

      <div className='total'>
        <h2 className='amount'>TOTALT PRIS: {totalPrice}:-</h2>
        <button>Gå till kassan</button>
      </div>

    </section>
  )
}