import React from 'react'
import { useSelector } from 'react-redux'


export const Checkout = () => {

  const user = useSelector((state) => state.authentication.user)
  const products = useSelector((store) => store.cart.items)
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))
  return (
    <div className='page-wrapper'>
      <h1 className='page-title'>KASSA</h1>
      <p className='message'>{user.name}, här är en summering av produkterna i din varukorg:</p>

      <div>
        {products.map((product) => (<p className='message'>{product.title}, {product.quantity} st</p>))}
      </div>

      <p className='message'>SUMMA: {totalPrice} SEK</p>

      <form>
        <p className='message'>Leveransadress:</p>
        <label>
          <input
            className='input-field'
            type="name"
            required={true}
            placeholder="förnamn & efternamn:"
          />
        </label>
        <label>
          <input
            className='input-field'
            type="adress"
            required={true}
            placeholder="gatuadress:"
          />
        </label>
        <label>
          <input
            className='input-field'
            type="adress"
            required={true}
            placeholder="postnummer och ort:"
          />
        </label>
      </form>

      <button className='checkout-button'>GENOMFÖR KÖP</button>
    </div>
  )
}