import React,{useCallback} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {Button,Input,RTE,Select} from '../index'
import dbService from '../../config/database'

function PostForm({post}) {
  const {register,handleSubmit,setValue,getValues,watch,control} = useForm({
    defaultValues:
    {
      title : post?.title || "" ,
      content : post?.content || "",
      slug :post?.$id || "",
      status :post?.status || "active"
    }
  })

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData)
  
  const submit = async (data) => {
    if(post){
      const file = data.image[0] ? await dbService.uploadFile(data.image[0]) : null
    }
    else{}
  }

  return (
    <div>PostForm</div>
  )
}

export default PostForm