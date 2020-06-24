import React from 'react'
import { useSelector } from 'react-redux'

export const LoggedIn = () => {

  const user = useSelector((state) => state.authentication.user)

  console.log(user.name);

  return (
    <div>
      <p className='message'>Hej {user.name} 👋🏼 &nbsp; Vad kul att du vill handla hos oss på växt.nu!</p>
    </div>
  )
}