import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin, } from '../store/authSlice'
import {Button,Logo,Input} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'

function SignUp() {
        const navigate = useNavigate()
        const dispatch = useDispatch()
        const {register, handleSubmit}= useForm()
        const [error, setError] = useState('')

        const create = async (data)=>{
            setError("")
            try {
                const session = await authService.createAccount(data)
                if (session) {
                    const userData = await authService.getCurrentUser()
                    if (userData) {
                        dispatch(authLogin(userData))
                        navigate('/')
                        
                    }
                    
                }
            } catch (error) {
                setError(error.message)
            }
        }
  return (
    <div className="flex items-center justify-center">
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
        <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(create)}>
                    <div>
                        <Input
                        label="Name : "
                        placeholder="full name"
                        {...register, {required:true}}
                        />
                    <Input
                    label='Email : '
                    placeHolder='Enter your Email'
                    type = 'email'
                    {...register("email", {required:true, })}
                    // regex for email pattern
                    />
                    <Input
                    label='Password : '
                    placeHolder='Enter your Password'
                    type = 'password'
                    {...register("password", {required:true, })}
                    // regex for email pattern
                    />
                    <Button type='submit'>Create Account</Button>
                    </div>
                </form>
        </div>
    </div>
  )
}

export default SignUp