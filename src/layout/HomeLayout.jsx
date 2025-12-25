import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import { useDispatch } from 'react-redux'
import { logOut } from '../features/AuthSliceReducer'

const HomeLayout = () => {
    let dispatch = useDispatch()
  return (
  <div>
    <button className='absolute top-2 right-2 border rounded-xl p-1 bg-red-900 text-white ' onClick={()=>dispatch(logOut) }>LogOut</button>
    <div className='flex'>
    <aside className='h-screen '>
        <Navbar/>
    </aside>
    <div className='p-2'>
    <Outlet/>
    </div>
    </div>
  </div>
  )
}

export default HomeLayout