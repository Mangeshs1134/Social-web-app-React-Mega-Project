import React from 'react'
import { SignUp as SignupComponent } from '../components'

const Signup = () => {
  console.log('pages signup');
  
  return (
    <div className='py-8'>
        <SignupComponent/>
    </div>
  )
}

export default Signup