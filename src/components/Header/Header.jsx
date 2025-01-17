import React from 'react'
import { Logo, LogoOutBtn} from '../index.js'
import Container from '../container/Container.jsx'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state)=> state.auth.status)
  const navigate = useNavigate()
  const navItems= [
    {
      name : "home",
      slug : "/",
      active : true,
    },
    {
      name : "login",
      slug : "/login",
      active : !authStatus,
    },
    {
      name : "signup",
      slug : "/signup",
      active : !authStatus,
    },
    {
      name : "all-post",
      slug : "/all-posts",
      active : authStatus,
    },
    {
      name : "add-post",
      slug : "/add-post",
      active : authStatus,
    },
    
  ]
  return (
    <div className='py-3 shadow bg-gray-500'>
       <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
             
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item)=>
            item.active ? (
              <li key={item.name}>
                <button onClick={()=> navigate(item.slug)}
                  className='inline-block px-6 py-2 rounded-full duration-200 hover:bg-blue-400'>
                  {item.name}
                 
                </button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoOutBtn/>
              </li>
            )}
          </ul>
        </nav>
       </Container>
    </div>
  )
}

export default Header