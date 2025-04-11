import React from 'react'
import { Outlet } from 'react-router-dom'
import BottomNav from '../common/header'
import Account from '../common/account'
import ProfileCard from './profileCard'


const ProfileLayout = () => {
  return (
    <div className='flex items-center flex-col justify-center gap-3 bg-primary w-full p-8'>
        <Account/>
        <BottomNav/>
        <ProfileCard/>
        <div className='w-full'>
          <Outlet/>
        </div>
    </div>
  )
}

export default ProfileLayout
