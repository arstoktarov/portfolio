import React from 'react'
import SectionTitle from './SectionTitle';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import { useTranslation } from 'react-i18next';

const About = ({ withNavigation = false }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const asd = "Hello, \n my name is arsen";

    return (
        <div className='flex flex-col-reverse md:flex-row'>
            <div className='flex flex-col w-full md:w-1/2 mt-6 md:mt-0 text-gray-300'>
                <div className='px-8 md:p-0 '>
                    <p className='whitespace-pre-line'>{t("about_me_description")}</p>
                </div>
                {
                    withNavigation ?
                    <div className='flex justify-center md:justify-start mt-10'>
                        <Button title={t("read_more_button")} onClick={() => { navigate('/about') }}/>
                    </div>
                    : ''
                }
            </div>
            <div className='w-full md:w-1/2'>
                <div className='flex flex-col justify-start md:items-end'>
                    <Profile />
                </div>
            </div>
        </div>
    )
}

export default About