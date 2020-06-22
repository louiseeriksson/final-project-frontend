import React from 'react'
import { useSelector } from 'react-redux'
// import { authentication } from '../reducers/authentication'

// how does redux work here?
export const LoggedIn = () => {

  const user = useSelector((state) => state.authentication.user)

  // console.log(currentUser)


  // hämta användaren från din reducer



  return (
    <div>
      <h1>HELLO {user.toUpperCase()} 👋🏼</h1>
      <button /*onClick={() => setLoggedIn(false)}*/>SIGN OUT</button>
    </div>
  )
}