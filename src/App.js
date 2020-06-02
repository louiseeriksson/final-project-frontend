import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Header } from 'components/Header'
import { Home } from 'components/Home'
import { ProductPage } from 'components/ProductPage'
import { ProductDetails } from 'components/ProductDetails'
import { Footer } from 'components/Footer'

export const App = () => {
  return (
    <BrowserRouter>
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
          <ProductDetails />
          {/* cartcomponent */}
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
