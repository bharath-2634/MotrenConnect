import React, { useEffect, useState, useRef } from 'react';
import { IoIosNotifications } from "react-icons/io";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import envelop from "../../assets/envelop_gif.gif";
import { FaCrown } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { RiFundsFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { fetchUserById, logoutUser } from '@/store/auth-slice';

const Account = () => {
  const { user, isAuthenticated, isLoading } = useSelector((state) => state.auth);
  const [userName, setUserName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const dispatch = useDispatch();

  const dropdownRef = useRef();

  useEffect(() => {
    if (user?.userId) {
      dispatch(fetchUserById(user?.userId));
    }
  }, [user?.userId]);

  useEffect(() => {
    setUserName(user?.userName);
  }, [user]);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  }

  return (
    <div className='fixed top-5 right-10 text-white flex items-center justify-center gap-2 z-20' ref={dropdownRef}>
      <div className='flex items-center justify-center border-gray-500 px-2 py-1 border-[.1rem] 
        rounded-[.5rem] relative w-[48px] h-[40px]'>
        <img 
          src={envelop}
          alt="Envelope Icon" 
          className='w-[60px] h-[40px] object-contain' 
        />
        <div className='absolute -top-2 -right-2 bg-[#453FF3] text-white text-[10px] font-bold 
          w-5 h-5 flex items-center justify-center rounded-full shadow-md'>
          {user?.profile?.envelope.length}
        </div>
      </div>

      {/* Notification */}
      <div className='flex items-center justify-center border-gray-500 px-3 py-[.6rem] border-[.1rem] 
        rounded-[.5rem] relative'>
        <FaCrown className='text-yellow-500 text-[1.2rem]'/>
        <div className='absolute -top-2 -right-2 bg-[#453FF3] text-white text-[10px] font-bold 
          w-5 h-5 flex items-center justify-center rounded-full shadow-md'>
          {user?.profile?.crown} 
        </div>
      </div>

      {/* Username & Dropdown */}
      <div className='relative'>
        <div
          className='flex items-center border-gray-500 justify-center px-2 py-[.3rem] border-[.1rem] 
          rounded-[.5rem] cursor-pointer gap-1'
          onClick={toggleDropdown}
        >
          <h2 className='font-poppins text-[1rem]'>{userName || "Get Started"}</h2>
          {showDropdown ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
        </div>

        {/* Dropdown */}
        {showDropdown && (
          <div className='absolute right-0 top-[120%] w-[210px] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-lg z-50'>

            {/* Crown/Points */}
            <div className='grid grid-cols-2 gap-3 mb-3 font-poppins'>
              <div className='flex flex-col items-center bg-black/30 rounded-xl p-2'>
                <span className='text-yellow-100'><FaCrown className='text-yellow-500 text-[1.2rem]'/></span>
                <p className='text-xs mt-2'>{user?.profile?.crown} crowns</p>
              </div>
              <div className='flex flex-col items-center bg-black/30 rounded-xl p-2'>
                <FaEnvelope className='text-violet-700 text-[1.2rem]'/>
                <p className='text-xs mt-2'>{user?.profile?.envelope.length} covers</p>
              </div>
              <div className='flex flex-col items-center bg-black/30 rounded-xl p-2'>
                <FaCoins className='text-yellow-500 text-[1.2rem]'/>
                <p className='text-xs mt-2'>{user?.profile?.points} coins</p>
              </div>
              <div className='flex flex-col items-center bg-black/30 rounded-xl p-2'>
                <RiFundsFill className='text-violet-700 text-[1.2rem]'/>
                <p className='text-xs mt-2'>{1000- user?.profile?.fundGrade} rank</p>
              </div>
            </div>

            {/* Divider */}
            <div className='border-t border-white/20 my-2'></div>

            {/* Menu Items */}
            <div className='space-y-2 font-poppins'>
              <div className='hover:text-violet-300 cursor-pointer flex gap-2 items-center justify-start'>
                <span><IoSettings className='text-[1.2rem] text-white'/></span> 
                <h2 className=''>Settings</h2>
              </div>
              <div className='hover:text-violet-300 cursor-pointer flex gap-2 items-center'>
                <span><CiUser className='text-[1.2rem] text-white'/></span> 
                <h2 className=''>Profile</h2>
              </div>
              <div className='hover:text-red-400 cursor-pointer flex gap-2 items-center' onClick={()=>{handleLogout()}}>
                <span><FiLogOut className='text-[1.2rem] text-white'/></span> 
                <h2 className=''>logout</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
