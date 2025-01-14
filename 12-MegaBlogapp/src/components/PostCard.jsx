import React from 'react'
import dbService from '../config/database'
import { Link } from 'react-router-dom'

function PostCard({$id,title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full p-4 rounded-xl bg-gray-100'>
        <div className='w-full justify-center mb-4'>
          <img src={dbService.getFilepreview(featuredImage)} alt={title} className='rounded-xl'/>
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard