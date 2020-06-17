import React from 'react'
import { useSelector } from 'react-redux'
import { UserNotLoggedIn } from './UserNotLoggedIn'
import { LoggedIn } from './LoggedIn'

export const LogIn = () => {
  // const [loggedIn, setLoggedIn] = useState(false)
  // const [currentUser, setCurrentUser] = useState({})


  const user = useSelector((state) => state.authentication.accessToken)

  return (
    <div className='page-wrapper'>

      {user && <LoggedIn />}
      {!user && <UserNotLoggedIn />}

    </div>
  )
}