import React, {useState, useEffect} from 'react';
import styles from '../style';
import { hacker } from '../assets';
import { Button } from '../components';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const nick = "HYPOCR1TE";
    const [nickname, setNickname] = useState(nick);
    const [nickHovered, setNickHovered] = useState(false);
    const { i18n, t } = useTranslation();

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
                {nickname} - {t("hero_title_one")} <span className='text-gray-800'>{t("hero_title_two")}</span> {t("hero_title_three")} <span className='text-gray-800'>{t("hero_title_four")}</span> 
            </h1>
            <p className='text-gray-300 mt-4 md:text-left text-center'>
                {t("hero_description")}
            </p>
            <div className='mt-6 flex flex-col items-center sm:items-start pb-8'>
                <Button onClick={()=> window.open("https://t.me/arstoktarov", "_blank")} title={t("contact_me_button")}/>
            </div>
        </div>

        <div className='flex flex-col items-center'>
            <div className='w-[450px] h-[320px] overflow-hidden flex justify-center items-center'>
                <img className="" src={hacker} />
            </div>
            <div className='flex flex-row items-center border border-gray-300 outline-1 outline-white px-2 py-1 min-w-[340px]'>
                <div className='w-[12px] h-[12px] block bg-gray-800 mr-2' />
                <p className='text-gray-300'>{t("active_job")}<span className='text-white'>Portfolio</span></p>
            </div>
        </div>
    </div>
  )
}

export default Hero