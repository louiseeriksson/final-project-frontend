import React, { useState } from 'react'
import { Register } from './Register'


// flutta till en annan komponent och render loggedin/welcome beroende på användarens status

export const UserNotLoggedIn = ({ currentUser, setCurrentUser, setLoggedIn }) => {
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [message, setMessage] = useState('')
  const handleLogin = async (event) => {
    event.preventDefault()
    let user = {
      name: userName,
      password: userPassword
    }
    console.log(user)

    let response = await fetch('https://final-project-louise.herokuapp.com/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    })

    let result = await response.json()
    if (result.userId) {
      console.log('fetch result', result)

      setUserName('')
      setUserPassword('')
      setCurrentUser({ userId: result.userId, accessToken: result.accessToken })
      setLoggedIn(true)
    } else {
      setMessage('User not found')
    }
  }

  return (
    <div className='page-wrapper'>
      <h1 className='page-title'>LOGGA IN HÄR:</h1>
      <form onSubmit={handleLogin}>
        {message && <p>{message}</p>}
        <label>
          Namn:
				<input
            type="text"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="namn"
          />
        </label>
        <label>
          Lösenord:
				<input
            type="password"
            required
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="lösenord"
          />
        </label>
        <button className='form-button' type="submit">LOGGA IN</button>
      </form>

      <h1 className='page-title'>ELLER REGISTRERA DIG HÄR:</h1>
      <Register />

    </div>
  )
}