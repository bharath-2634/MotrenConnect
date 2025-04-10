import { logoutUser } from '@/store/auth-slice';
import React from 'react'
import { useDispatch } from 'react-redux'

const ProfileCard = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
    }
  return (
    <div className='w-full flex items-center justify-between gap-3 p-3 font-poppins'>
        <div>
            
        </div>
        <div className='p-8'>
            <div className='w-[10rem] p-3 text-white bg-primary_button rounded items-center text-center cursor-pointer' onClick={()=>{handleLogout()}}>
                <h2 className='text-[1.1rem] capitalize'>logout</h2>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard
