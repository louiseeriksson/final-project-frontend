import React, { useState, useEffect } from 'react'

// howdoes redux work here?
export const LoggedIn = ({ currentUser, setCurrentUser, setLoggedIn }) => {
  const [user, setUser] = useState('')
  console.log(currentUser)

  useEffect(
    () => {
      const fetchData = async () => {
        let response = await fetch(`https://final-project-louise.herokuapp.com/users/${currentUser._id}`, {
          method: 'GET',
          headers: {
            Authorization: currentUser.accessToken,
            'Content-Type': 'application/json;charset=utf-8'
          }
        })

        let result = await response.json()
        console.log('authorization result', result)

        if (result.name) {
          setUser(result.name)
        } else {
          setLoggedIn(false)
        }
      }
      fetchData()

      return () => {
        setCurrentUser({})
      }
    },
    // [currentUser]
  )

  return (
    <div>
      <h1>HELLO {user.toUpperCase()} 👋🏼</h1>
      <button onClick={() => setLoggedIn(false)}>SIGN OUT</button>
    </div>
  )
}