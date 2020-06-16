import React from 'react'
import { UserNotLoggedIn } from './UserNotLoggedIn'
// import { LoggedIn } from './LoggedIn'

export const LogIn = () => {
  // const [loggedIn, setLoggedIn] = useState(false)
  // const [currentUser, setCurrentUser] = useState({})

  return (
    <div className='page-wrapper'>

      {/* if not logged in show this: */}
      <UserNotLoggedIn />

      {/* if logged in show this: */}
      {/* memberpage / ordered items etc */}
      {/* <LoggedIn /> */}
    </div>
  )
}