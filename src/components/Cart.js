import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'
import { LogIn } from './LogIn'

export const Cart = () => {

  const products = useSelector((store) => store.cart.items)
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))

  const user = useSelector((state) => state.authentication.user)

  return (
    <div className='page-wrapper'>
      <h1 className='page-title'>VARUKORG</h1>

      <section className='items'>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </section>

      <div className='total'></div>

      {totalPrice > 0 ? <h2 className='amount'>SUMMA: {totalPrice}:-</h2> : ''}

      <LogIn />

      {user &&
        <Link to='/checkout'>
          <button className='checkout-button'>TILL KASSAN</button>
        </Link>}
    </div>
  )
}