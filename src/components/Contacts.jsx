import React from 'react';
import SectionTitle from './SectionTitle';
import { discord, email } from '../assets';

const Contacts = () => {
  return (
    <div className='flex flex-row justify-between'>
        <div className='flex flex-row w-1/2'>
            <div>
                <p className='text-gray-300'>
                    I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me.
                </p>
            </div>
        </div>
        <div className='flex flex-row'>
            <div className='flex flex-col justify-center border border-white px-6 py-4'>
                    <p className='font-600 text-white'>Message me here</p>
                <div className='flex flex-row items-center pt-2'>
                    <img src={discord} className='pr-2'></img>
                    <p className='text-gray-300'>!hypocr1te#0554</p>
                </div>
                <div className='flex flex-row items-center pt-2'>
                    <img src={email} className='pr-2'></img>
                    <p className='text-gray-300'>ars.toktarov@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts