import ProfileCard from '@/components/profile-view/profileCard'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-3'>
        <ProfileCard/>
        <Outlet/>
    </div>
  )
}

export default Profile
