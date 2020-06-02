import { createSlice } from '@reduxjs/toolkit'

const productData = [
  { id: 1, title: 'flower', price: 20 },
  { id: 2, title: 'tree', price: 30 },
  { id: 3, title: 'grass', price: 40 },
]

export const products = createSlice({
  name: 'products',
  initialState: productData
})