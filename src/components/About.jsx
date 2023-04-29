import React from 'react'
import SectionTitle from './SectionTitle';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';

const About = ({ withNavigation = false }) => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-row'>
            <div className='flex flex-col w-1/2 text-gray-300'>
                <div>
                    <p>Hello, i’m Arsen!</p>
                    <br />
                    <p>I’m a self-taught front-end developer based in Almaty, Kazakhstan. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </p>
                    <br />
                    <p>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
                </div>
                {
                    withNavigation ?
                    <div className='flex flex-row mt-10'>
                        <Button title='Read more ->' onClick={() => { navigate('/about') }}/>
                    </div>
                    : ''
                }
            </div>
            <div className='w-1/2'>
                <Profile />
            </div>
        </div>
    )
}

export default About