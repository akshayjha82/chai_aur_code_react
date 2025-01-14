import { useState } from "react"
import React from 'react'
import {Button,Logo,Input} from './index'
import {Link,useNavigate} from 'react-router-dom'
import authentication from "../auth_service/auth"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import {login} from '../store/authSlice'

function Signup() {
  const [error,setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register,handleSubmit] = useForm();
  const create = async function(data) {
    setError("");
    try {
      const newdata = await authentication.createAccount(data);
      if(newdata){
        const userData = await authentication.getcurrentUser();
        if(userData) dispatch(login(userData));
        navigate('/')
      }
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%"/>
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Signup to create an account</h2>
        <p className="mt-2 text-center text-base text-black/60">
            Already have an account?&nbsp;
            <Link
                to="/login"
                className="font-medium text-primary transition-all duration-200 hover:underline">
                Sign In
            </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
             label = "Name : "
             placeholder = "Enter your full name"
             {...register("name",{
              required :true
             })}
            />
            <Input 
              label = "Email : "
              type="email"
              placeholder = "Enter your email"
              {...register("email",{
                required : true,
                validate : {
                  matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm.test(value) || "Email must be a valid address"
                }
              })}
              />
              <Input
              label = "Password"
              type = "password"
              placeholder = "Enter your password"
              {...register("password",{
                required:true
              })}
              /> 
              <Button type="submit" className="w-full">Create Account</Button>           
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup