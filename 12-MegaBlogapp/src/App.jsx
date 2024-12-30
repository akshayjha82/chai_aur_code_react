import { useState,useEffect } from 'react'

import {useDispatch} from 'react-redux'
import authService from './auth_service/auth'
import {login,logout} from './store/authSlice'
import {Header,  Footer } from './components/index'


function App() {
  const [loading,setloading] = useState(true);
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getcurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      } else {
        dispatch(logout());
      }
    })
    .finally(() => setloading(false))
  },[])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
          <Header/>
          <main>
           TODO: {/* <Outlet/> */}
          </main>
          <Footer/>
      </div>
    </div>
    
  ) : null
}

export default App
