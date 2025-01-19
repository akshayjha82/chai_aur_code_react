import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children,authentication=true}) {
  const [loader,setloader] = useState(true);
  const authstatus = useSelector(state => state.auth.status)
  const navigate = useNavigate();
  useEffect(() => {
    if(authentication && authstatus !== authentication){
      navigate('/login')
    } else if(!authentication && authstatus !== authentication){
      navigate('/')
    }
    setloader(false);
  },[authentication,authstatus,navigate])
  return (
    loader ? <h2>loading...</h2> : <>{children}</>
  )
}

 