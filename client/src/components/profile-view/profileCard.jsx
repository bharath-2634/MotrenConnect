import { logoutUser } from '@/store/auth-slice';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProfileCard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [previewImg, setPreviewImg] = useState(null);
  const fileInputRef = useRef(null);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected image:", file); 
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImg(reader.result);
      };
      reader.readAsDataURL(file);
      console.log(reader)
    }
  };

  return (
    <div className='w-full flex items-center justify-between gap-3 p-3 font-poppins'>
      <div className='p-8 flex gap-3 items-center capitalize'>
        <div
          className='relative group cursor-pointer border-4 border-primary_button rounded-full w-[8rem] h-[8rem] overflow-hidden'
          onClick={() => fileInputRef.current.click()}
        >
          <img
            src={previewImg || 'img.png'}
            alt="Profile"
            className='w-full h-full object-cover rounded-full'
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 hidden group-hover:flex items-center justify-center">
            <p className="text-white text-sm font-medium">Edit Profile</p>
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <h2 className='text-2xl text-primary_button font-semibold'>{user.userName}</h2>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
            <p className='text-white'>{user.role}</p>
          </div>
        </div>
      </div>
      <div className='p-8'>
        <div
          className='w-[10rem] p-3 text-white bg-primary_button rounded text-center cursor-pointer'
          onClick={handleLogout}
        >
          <h2 className='text-[1.1rem] capitalize'>logout</h2>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
