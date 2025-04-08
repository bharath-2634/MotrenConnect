import React from 'react'
import BottomNav from '../common/header'
import "../styles/style.css"
import Account from '../common/account'
import {MdRocketLaunch } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

const HomeHeader = () => {
  return (
    <div className='custom-bg w-full flex flex-col items-center justify-center min-h-screen relative overflow-hidden'>
        <BottomNav/>
        <Account/>
        <div className='flex flex-col items-center justify-center gap-3 text-white font-poppins'>
            <h2 className='font-bold lg:text-[2.6rem] md:text-[2rem] sm:text-[1.8rem] text-[1.5rem]'># Freelance for Change</h2>
            <div className='flex items-center justify-center gap-2 lg:text-[1rem] md:text-[.8rem] sm:text-[.8rem] text-[.7rem] sm:gap-1 '>
              <p>Develop</p>
              <div className='bg-[#ffff] rounded-3xl w-[.5rem] h-[.5rem] mt-[.1rem]'>
              </div>
              <p>Contribute</p>
              <div className='bg-[#ffff] rounded-3xl w-[.5rem] h-[.5rem] mt-[.1rem]'>
              </div>
              <p className='tracking-tighter'>Make an Impact</p>
            </div>
            <div className='lg:mt-[2rem] md:mt-[3rem] sm:mt-[3rem] mt-[2rem] text-white font-poppins flex flex-col items-center justify-center gap-0'>
              <h4 className='lg:text-[1rem] md:text-[.8rem] sm:text-[.8rem] text-[.7rem]'>Want to be a part of Motren ?</h4>
              <div className='flex items-center justify-center gap-3'>
                <button className="relative px-4 py-2 sm:px-5 sm:py-3 bg-primary_button text-white font-poppins text-[0.9rem] sm:text-[1rem] rounded-[.4rem] shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex items-center justify-center gap-2 mt-8">
                  <MdRocketLaunch className="text-white text-[1rem] sm:text-[1.2rem]" />
                  <p>Join Us</p>
                </button>
                <button className="relative px-2 py-2 sm:px-5 sm:py-3 bg-secondary_button text-white font-poppins text-[0.9rem] sm:text-[1rem] rounded-[.4rem] shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex items-center justify-center gap-2 mt-8">
                  <IoIosAddCircle className="text-white text-[1rem] sm:text-[1.2rem]" />
                  <p>book now</p>
                </button>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default HomeHeader
