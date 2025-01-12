import React from 'react'
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import authentication from "../../auth_service/auth"; 



function Logoutbtn() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    authentication.logout().then(()=>{
      dispatch(logout());
    })
  }
  return (
    <button className='inline-block px-6 py-2 
    duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default Logoutbtn