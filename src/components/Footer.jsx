import React from 'react';
import { logo, github_icon, telegram_icon, linked_icon } from '../assets';
import { media } from '../constants';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between items-center'>
        <div className='flex flex-col w-full md:w-1/2'>
            <div className='flex flex-row items-center justify-center md:justify-start py-1'>
                <div className='w-[40px] h-[40px] overflow-hidden rounded-full'>
                    <img className='w-full h-full' src={logo} />
                </div>
                <div className='ml-3'>
                    <h1 className='text-white'>hypocr1te</h1>
                </div>
                <p className='text-gray-300 ml-8'>ars.toktarov@gmail.com</p>
            </div>
            <div className='mt-2 flex justify-center md:justify-start'>
                <p className='text-white'>Full stack React/Laravel developer</p>
            </div>
        </div>
        
        <div className='flex justify-center md:justify-end w-1/3'>
            <div className='flex flex-col mt-3'>
                <h1 className='text-white text-[18px] text-center md:text-start'>Media</h1>
                <div className='flex flex-row mt-2'>
                    {
                        media.map((item, index) => (
                            <Link key={index} to={item.link} target='_blank' className='flex flex-row items-center justify-center p-1 w-[35px] h-[35px] overflow-hidden'>
                                <img className='mr-1 w-[25px] h-[25px]' src={item.icon} />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer