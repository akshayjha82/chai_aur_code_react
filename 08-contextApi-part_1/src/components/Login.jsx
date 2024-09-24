import React from 'react'
import UserContextApi from '../contextApi/UserContextApi'
import { useContext } from 'react'

function Login() {
  const [username, setusername] = React.useState("")
  const [password, setpassword] = React.useState("")

  const {setuser} = useContext(UserContextApi)

  const handleClick = (e) =>{
    e.preventDefault();
    setuser({username,password});
  }
  return (
    <div>
      <h1>Login</h1>

      <input type="text" placeholder='username' 
      value={username} 
      onChange={(e) => setusername(e.target.value)}/>
      <br/>
      <input type='password' placeholder='password' 
      value={password}
      onChange={(e) => setpassword(e.target.value)}/>
      <br />
      <br />
      <button onClick={handleClick}>Sign In</button>
    </div>
  )
}

export default Login;