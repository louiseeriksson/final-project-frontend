import { createSlice } from '@reduxjs/toolkit'

const productData = [
  { id: 1, title: 'flower', price: 20 },
  { id: 2, title: 'flower', price: 20 },
  { id: 3, title: 'flower', price: 20 },
]

export const products = createSlice({
  name: 'products',
  initialState: productData
})