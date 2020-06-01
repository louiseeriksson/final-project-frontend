import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from 'components/Home'
import { ProductPage } from 'components/ProductPage'
import { ProductDetails } from 'components/ProductDetails'


export const App = () => {
  return (
    <div>
      <BrowserRouter>
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
        </Switch>
      </BrowserRouter>
    </div>
  )
}
