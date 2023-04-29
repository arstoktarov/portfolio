import React from 'react';
import { logo, landmark, profile_image } from '../assets';

const Profile = () => {
  return (
    <div className='flex flex-col justify-start items-end'>
        <div className='flex flex-col items-center'>
            <div className='rounded-full border-4 border-gray-300 w-[250px] h-[250px] overflow-hidden flex justify-center items-center'>
                <img className='mt-20' src={profile_image} alt="image"></img>
            </div>
            <div className='flex flex-col items-center justify-center py-4'>
                <h1 className='text-[20px]'>Arsen Toktarov</h1>
                <p className='mt-1 text-gray-300'>Fullstack Laravel/ReactJS engineer</p>
                <div className='mt-1 flex flex-row items-center'>
                    <img src={landmark} alt="landmark" className='mr-2 h-[20px] w-[20px]'/>
                    <p className='text-gray-300'>Almaty, Kazakhstan</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile