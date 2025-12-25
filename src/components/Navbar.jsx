import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='h-full w-80 border '>
        <nav className='flex flex-col '>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/home/user'}>User</NavLink>
            <NavLink to={'/home/products'}>products</NavLink>
        </nav>
    </div>
  )
}

export default Navbar