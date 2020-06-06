import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { createStore } from 'redux'

import { cart } from 'reducers/cart'
import { products } from 'reducers/products'

import { Header } from 'components/Header'
import { Home } from 'components/Home'
import { ProductPage } from 'components/ProductPage'
import { ProductDetails } from 'components/ProductDetails'
import { Cart } from 'components/Cart'
import { Footer } from 'components/Footer'

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.log(e)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
    return undefined
  }
}

const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer
})

const persistedState = loadFromLocalStorage()

// const store = configureStore({ reducer, persistedState })

const store = createStore(
  reducer,
  persistedState
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/products'>
            <ProductPage />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetails />
          </Route>
          <Route path='/inspiration'>
            <ProductDetails />
            {/* inspirationcomponent */}
          </Route>
          <Route path='/about'>
            <ProductDetails />
            {/* aboutcomponent */}
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}
