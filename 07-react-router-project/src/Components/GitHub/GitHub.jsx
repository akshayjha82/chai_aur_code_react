import React, { useEffect, useState } from 'react'

function GitHub() {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch(`https://api.github.com/users/akshayjha82`).
    then((res) => res.json()).
    then(res => setData(res))
  })
  return (
    <div className='bg-gray-800 text-white m-4 p-4 justify-center text-center flex-col '>
    <p>GitHub Folowers : {data.followers}</p>
    <div className='flex-row'>
    <img src={data.avatar_url} className='p-5'/>
    <p>GitHub Repos : {data.public_repos}</p>
    </div>
    </div>
  )
}

export default GitHub