import React from 'react'
import { useSelector } from 'react-redux'
// import { authentication } from 'reducers/authentication'

export const LoggedIn = () => {

  const user = useSelector((state) => state.authentication.user)

  console.log(user.name);

  return (
    <div>
      <p>Hej {user.name} 👋🏼 &nbsp; Vad kul att du vill handla hos oss på växt.nu!</p>
      {/* <button onClick={() => setUser}>SIGN OUT</button> */}
    </div>
  )
}