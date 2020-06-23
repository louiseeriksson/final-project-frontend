import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const authentication = createSlice({
  name: 'authentication',
  initialState: {
    user: null,
    error: ''
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user
    },
    setErrorMessage: (state, action) => {
      state.error = action.payload.error
    }
  }
})

// Thunk
export const handleLogin = (email, password, accessToken) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))

    fetch('https://final-project-louise.herokuapp.com/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ email, password, accessToken }),
    })
      .then((res) => res.json())
      .then((json) => {

        if (json.accessToken) {
          dispatch(authentication.actions.setUser({ user: json }))
          console.log(json)
        } else {
          dispatch(authentication.actions.setErrorMessage({ error: 'Woops, something went wrong. Try again!' }))
        }

        dispatch(ui.actions.setLoading(false))
      })
  }
}
