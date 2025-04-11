import React from 'react'
import { Outlet } from 'react-router-dom'
import AccelerateHeader from './accelerateHeader'
import CardAnimation from './CardAnimation'



const AccelerateLayout = () => {
  return (
    <div className='flex items-center flex-col justify-center gap-3 bg-primary w-full'>
        <AccelerateHeader/>
        <CardAnimation/>
        <div className='w-full'>
          <Outlet/>
        </div>
    </div>
  )
}

export default AccelerateLayout
