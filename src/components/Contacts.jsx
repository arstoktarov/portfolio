import React from 'react';
import SectionTitle from './SectionTitle';
import { discord, email, telegram_icon } from '../assets';
import { Link } from 'react-router-dom';

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
                <p className='font-600 text-white'>Message me here:</p>
                <Link to='https://discordapp.com/users/529777469151248384' target='_blank' className='flex flex-row items-center justify-start pt-2 hover:text-white text-gray-300'>
                <div className='w-[30px] h-[30px]'>
                        <img className='w-full h-full pr-2' src={discord} />
                    </div>
                    <p className=''>!hypocr1te#0554</p>
                </Link>
                <Link to='mailto: ars.toktarov@gmail.com' target='_blank' className='flex flex-row items-center justify-start pt-2 hover:text-white text-gray-300'>
                    <div className='w-[30px] h-[30px]'>
                        <img className='w-full h-full pr-2' src={email} />
                    </div>
                    <p>ars.toktarov@gmail.com</p>
                </Link>
                <Link to='https://t.me/arstoktarov' target='_blank' className='flex flex-row items-center justify-start pt-2 hover:text-white text-gray-300'>
                    <div className='w-[30px] h-[30px]'>
                        <img className='w-full h-full pr-2' src={telegram_icon} />
                    </div>
                    <p>arstoktarov</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contacts