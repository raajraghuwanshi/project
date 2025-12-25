import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import UserCard from '../components/UserCard'

const UserPage = () => {
    let users = useSelector((state)=>state.users.users)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {
            users.map((user)=> <UserCard user={user}/>)
        }
    </div>
  )
}

export default UserPage