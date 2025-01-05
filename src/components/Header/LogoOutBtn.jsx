import React from 'react'
import {useDispatch} from "react-redux"
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
function LogoOutBtn() {
      const dispatch = useDispatch()
      const logOutHandler = ()=>{
        authService.logOut().then(()=>{
          dispatch(logout())
        })
      }
  return (
    <button className='inline-block px-6 py-2 rounded-full duration-200 hover:bg-blue-400'>
      LogOut
    </button>
  )
}

export default LogoOutBtn