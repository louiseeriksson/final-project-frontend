import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Register } from './Register'
import { useDispatch } from 'react-redux'
import { handleLogin } from 'reducers/authentication'

export const UserNotLoggedIn = () => {
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  // const [message, setMessage] = useState('')

  const errorMessage = useSelector((state) => state.authentication.error)

  const dispatch = useDispatch()
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(handleLogin())
  }
  return (
    <div className='user-not-logged-in-wrapper'>
      <h1 className='page-title'>LOGGA IN HÄR:</h1>
      <form onSubmit={handleSubmit}>
        {/* {message && <p>{message}</p>} */}

        {/* login-form funkar inte! allt är ok i backend, vad är fel i frontend? */}
        <label>
          <input
            className='input-field'
            type="text"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="namn:"
          />
        </label>
        <label>
          <input
            className='input-field'
            type="password"
            required
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="lösenord:"
          />
        </label>

        {errorMessage && <p>{errorMessage}</p>}

        <button className='form-button' type="submit">LOGGA IN</button>
      </form>

      <h1 className='page-title'>INTE MEDLEM? REGISTRERA DIG HÄR:</h1>

      {/* register funkar! */}
      <Register />

    </div>
  )
}