import React , {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AuthLayout({children , authentication=true}) {
    console.log('called');
    
    const navigate= useNavigate()
    const [loader, setloader]= useState(true)
    const authStatus= useSelector((state)=>(state.auth.status))

    useEffect(() => {
        if (authentication && authStatus != authentication) {
            navigate('/login')
        }else if(!authentication && authStatus != authentication){
            navigate('/')
        }
        setloader(false)
     }
    ,[authStatus, navigate, authentication])
    

  return loader? <h1>ok</h1>: <>{children}</>
}

export default AuthLayout