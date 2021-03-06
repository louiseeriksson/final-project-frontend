import React, { useState } from 'react'

export const Register = () => {
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleRegister = async (event) => {
    event.preventDefault();
    let user = {
      name: userName,
      email: userEmail,
      password: userPassword
    }
    console.log(user)

    let response = await fetch('https://final-project-louise.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    })

    let result = await response.json()
    if (result.name) {
      console.log('fetch result', result)
      setMessage(`${result.name} är nu en registrerad användare!`)
      setUserName('')
      setUserPassword('')
      setUserEmail('')
    } else {
      setMessage('Kunde inte registrera användare. Testa igen!')
    }
  }

  return (
    <form onSubmit={handleRegister}>

      <label>
        <input
          className='input-field'
          type="text"
          required={true}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="namn:"
        />
      </label>
      <label>
        <input
          className='input-field'
          type="email"
          required={true}
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="mail:"
        />
      </label>
      <label>
        <input
          className='input-field'
          type="password"
          required={true}
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          placeholder="lösenord:"
        />
      </label>

      {message && <p className='message'>{message}</p>}

      <button className='form-button' type="submit">REGISTRERA</button>
    </form>
  )
}