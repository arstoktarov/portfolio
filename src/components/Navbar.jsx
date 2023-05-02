import React from 'react';
import { logo } from '../assets';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { t } = useTranslation();

    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <div className='flex flex-row items-center py-1'>
                <div className='w-[40px] h-[40px] overflow-hidden rounded-full'>
                    <img src={logo} />
                </div>
                <div className='ml-3 cursor-pointer' onClick={() => {navigate('/')}}>
                    <h1 className='text-white'>hypocr1te</h1>
                </div>
            </div>
            <div className='md:flex flex-1 hidden'>
                <ul className='list-none flex justify-end items-center flex-1'>
                    <li className='mr-5'>
                        <Link to='/' className={`header-link hover:text-white ${pathname === '/' ? 'text-white' : 'text-gray-300'}`} >{t("home")}</Link>
                    </li>
                    <li className='mr-5'>
                        <Link to='/projects' className={`header-link hover:text-white ${pathname === '/projects' ? 'text-white' : 'text-gray-300'}`}>{t("projects")}</Link>
                    </li>
                    <li className='mr-5'>
                        <Link to='/about' className={`header-link hover:text-white ${pathname === '/about' ? 'text-white' : 'text-gray-300'}`}>{t("about_me")}</Link>
                    </li>
                    <li className=''>
                        <Link to='/contacts' className={`header-link hover:text-white ${pathname === '/contacts' ? 'text-white' : 'text-gray-300'}`}>{t("contacts")}</Link>
                    </li>
                </ul>
            </div>
            <div>

            </div>
        </nav>
    )
}

export default Navbar;