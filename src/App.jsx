import { useState, useEffect } from 'react'
import { useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import {Header, Footer} from "./components/index"
import { Outlet } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import authService from './appwrite/auth'

function App() {
  
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
     authService.getCurrentUser()
     .then((userData)=>{
        if (userData) {
          console.log('if');
          
          dispatch(login({userData}))
        } else {
          console.log('else');
          dispatch(logout())
        }
     })
     .finally(()=>{
      console.log("finally");
      
      setLoading(false)
     })
  }, [])
  



  return !loading ? (
    <div className='min-h-screen flex flex-wrap bg-gray-400'>
      <div className="w-full block">
        <Header/>
        <main>
         Todo : <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : (
    null
  )
}

export default App
