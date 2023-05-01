import React, {useState, useEffect} from 'react';
import styles from '../style';
import { hacker } from '../assets';
import { Button } from '../components';

const Hero = () => {
    const nick = "HYPOCR1TE";
    const [nickname, setNickname] = useState(nick);
    const [nickHovered, setNickHovered] = useState(false);

    useEffect(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let iterations = 0;

        const interval = setInterval(() => {
            const newNick = nickname.split("").map((letter, index) => {
                if (index < iterations) {
                    return nick[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            }).join("")
            setNickname(newNick);

            if (iterations >= nick.length) clearInterval(interval);

            iterations += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [nickHovered]);

  return (
    <div className={`flex md:flex-row flex-col`}>
        <div className={`flex flex-col flex-1 md:mt-6`}>
            <h1 className='font-semibold text-[26px] md:text-[32px] sm:text-left text-center text-white' onMouseEnter={() => setNickHovered(val => !val)}>
                {nickname} - ReactJS <span className='text-gray-800'>front-end developer</span> with 1 year of <span className='text-gray-800'>commercial</span> experience
            </h1>
            <p className='text-gray-300 mt-4 md:text-left text-center'>
                He crafts responsive websites where technologies meet creativity
            </p>
            <div className='mt-6 flex flex-col items-center sm:items-start pb-8'>
                <Button onClick={()=> window.open("https://t.me/arstoktarov", "_blank")} title="Contact me ->"/>
            </div>
        </div>

        <div className='flex flex-col items-center'>
            <div className='w-[450px] h-[320px] overflow-hidden flex justify-center items-center'>
                <img className="" src={hacker} />
            </div>
            <div className='flex flex-row items-center border border-gray-300 outline-1 outline-white px-2 py-1 min-w-[340px]'>
                <div className='w-[12px] h-[12px] block bg-gray-800 mr-2' />
                <p className='text-gray-300'>Currently working on <span className='text-white'>Portfolio</span></p>
            </div>
        </div>
    </div>
  )
}

export default Hero