import React, { useState } from 'react'
import { Register } from './Register'
import { useDispatch } from 'react-redux'
import { handleLogin } from 'reducers/authentication'

export const UserNotLoggedIn = ({ currentUser, setCurrentUser, setLoggedIn }) => {
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  // const [message, setMessage] = useState('')

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
        <button className='form-button' type="submit">LOGGA IN</button>
      </form>

      <h1 className='page-title'>ELLER REGISTRERA DIG HÄR:</h1>
      <Register />

    </div>
  )
}