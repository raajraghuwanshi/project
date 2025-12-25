import React, { useState } from 'react'
import Login from '../components/Login'
import Resister from '../components/Register'

const AuthLayout = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div>
        {
            toggle?<Login setToggle={setToggle}/>:<Resister setToggle={setToggle}/>
        }
    </div>
  )
}

export default AuthLayout