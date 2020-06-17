import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const authentication = createSlice({
  name: 'authentication',
  initialState: {
    accessToken: ''
  },

  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload.accessToken
    }
  }
})

// Thunk
export const handleLogin = async (user) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))

    fetch('https://final-project-louise.herokuapp.com/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(authentication.actions.setAccessToken({ accessToken: json }))
        console.log(json)

        dispatch(ui.actions.setLoading(false))


      })
    // dispatch(authentication.actions.setAccessToken({ accessToken: "ad6126a6d4d7d54eae5bf0e72be7f578dd61610eadb96d5ca6829f723610b432956a8aa94dce148812b4c290c22abe7576c52b062310fd8d3b76b903e6e85baa413639c459c4fb7e3adfb02e316362c47e730ad15844fa320898b4400ddfeb8aa73f34269be4a18550632a67ca312233ee5cd04e826ab911925ad99a4c99a990" }));
  }
}
