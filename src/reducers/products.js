import React from 'react'
import thunk from 'redux-thunk'
import { applyMiddleware, compose } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const products = createSlice({
  name: 'products',
  initialState: {
    all: []
  },

  reducers: {
    setProducts: (state, action) => {
      state.all = action.payload.products
    }
  }
})

// Thunk
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://final-project-louise.herokuapp.com/products')
      .then((res) => res.json())
      .then((json) => {
        dispatch(products.actions.setProducts({ products: json }))
        console.log(json);

        dispatch(ui.actions.setLoading(false))
      })
  }
}

// where should i call this function?
// fetchProducts()