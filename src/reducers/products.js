import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const products = createSlice({
  name: 'products',
  initialState: {
    all: []
  },

  reducers: {
    setProducts: (state, action) => {
      state.all = action.payload
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
        dispatch(products.actions.setProducts(json))
        console.log(json);

        dispatch(ui.actions.setLoading(false))
      })
  }
}

// where should i call this function?
// fetchProducts()