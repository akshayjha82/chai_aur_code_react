import React from 'react'
import UserContextApi from '../contextApi/UserContextApi'
import { useContext } from 'react'

function Profile() {
  const { user } = useContext(UserContextApi)

  if(!user) return <h2>Please enter Username</h2>
  else return <h3>welcome {user.username}</h3>
   
}

export default Profile;