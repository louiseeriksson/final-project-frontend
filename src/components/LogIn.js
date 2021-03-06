import React from 'react'
import { useSelector } from 'react-redux'
import { UserNotLoggedIn } from './UserNotLoggedIn'
import { LoggedIn } from './LoggedIn'

export const LogIn = () => {

  const user = useSelector((state) => state.authentication.user)

  return (
    <div className='page-wrapper'>

      {user && <LoggedIn />}
      {!user && <UserNotLoggedIn />}

    </div>
  )
}