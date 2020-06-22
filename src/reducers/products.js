import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const products = createSlice({
  name: 'products',
  initialState: {
    all: [],
    details: {},
    isFeatured: []
  },

  reducers: {
    setProducts: (state, action) => {
      state.all = action.payload.products
    },
    setDetails: (state, action) => {
      state.details = action.payload.details
    },
    setIsFeatured: (state, action) => {
      state.isFeatured = action.payload.isFeatured
    }
  }
})

// Thunks
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

export const fetchDetails = (id) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://final-project-louise.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(products.actions.setDetails({ details: json }))
        console.log(json);

        dispatch(ui.actions.setLoading(false))
      })
  }
}

export const fetchIsFeatured = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://final-project-louise.herokuapp.com/products?isFeatured=true')
      .then((res) => res.json())
      .then((json) => {
        dispatch(products.actions.setIsFeatured({ isFeatured: json }))
        console.log(json);

        dispatch(ui.actions.setLoading(false))
      })
  }
}