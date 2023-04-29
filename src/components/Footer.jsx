import React from 'react';
import { logo, github_icon, telegram_icon, linked_icon } from '../assets';

const Footer = () => {
  return (
    <div className='flex flex-row justify-between'>
        <div className='flex flex-col w-1/2'>
            <div className='flex flex-row items-center py-1'>
                <div className='w-[40px] h-[40px] overflow-hidden rounded-full'>
                    <img src={logo} />
                </div>
                <div className='ml-3'>
                    <h1 className='text-white'>hypocr1te</h1>
                </div>
                <p className='text-gray-300 ml-8'>ars.toktarov@gmail.com</p>
            </div>
            <div className='mt-2'>
                <p className='text-white'>Full stack React/Laravel developer</p>
            </div>
        </div>
        
        <div className='flex justify-end w-1/3'>
            <div className='flex flex-col mt-3'>
                <h1 className='text-white text-[18px]'>Media</h1>
                <div className='flex flex-row mt-2'>
                    <img className='mr-1' src={github_icon} />
                    <img className='mr-1' src={linked_icon} />
                    <img className='mr-1' src={telegram_icon} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer