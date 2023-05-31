import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from '../components';
import styles from '../style';
import { useTranslation } from 'react-i18next';
import Fade from '@mui/material/Fade';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { media } from '../constants';
import { Link } from 'react-router-dom';

const Layout = ({children}) => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  console.log(i18n.language);

  const changeLanguageHandler = (lang = "en") =>
  {
    i18n.changeLanguage(lang);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const toggleVisibility = () => {
      console.log(isVisible);
      console.log(window.pageYOffset);
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };


    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
    scrollToTop();
  }, [])

  return (
      <div className='bg-primary min-h-[100vh] relative flex-col'>
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <Fade in={true} timeout={500}>
          <div className='flex-1 flex-grow-1 text-white'>
            <div className={`${styles.flexCenter}`}>
            <div className={`${styles.boxWidth} ${styles.paddingY}`}>
              {children}
            </div>
            </div>
          </div>
        </Fade>

        <hr className='bg-white h-[100%]'/>

        <div className={`${styles.flexStart} min-h-[150px]`}>
          <div className={`${styles.boxWidth} py-5`}>
            <Footer />
          </div>
        </div>

        <div className='hidden md:flex fixed flex-col items-center left-0 top-0 w-[50px]'>
          <div className='h-[25vh] bg-white w-[1px]'></div>
          <div className='text-white flex flex-col mt-2'>
            <a onClick={() => {changeLanguageHandler("ru")}} className={`${i18n.language != 'ru' ? 'underline cursor-pointer' : ''} hover:no-underline`}>RU</a>
            <a onClick={() => {changeLanguageHandler("en")}} className={`${i18n.language != 'en' ? 'underline cursor-pointer' : ''} hover:no-underline`}>EN</a>
            <a onClick={() => {changeLanguageHandler("kz")}} className={`${i18n.language != 'kz' ? 'underline cursor-pointer' : ''} hover:no-underline`}>KZ</a>
          </div>
          <div className='h-[10vh] bg-white w-[1px] mt-2'></div>
          <div className='flex flex-col mt-2'>
                    {
                        media.map((item, index) => (
                            <Link key={index} to={item.link} target='_blank' className='flex flex-row items-center justify-center p-1 w-[35px] h-[35px] overflow-hidden'>
                                <img className='mr-1 w-[25px] h-[25px]' src={item.icon} />
                            </Link>
                        ))
                    }
          </div>
        </div>


        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          icon={<ArrowUpwardIcon />}
          FabProps={{
            color: 'error',
          }}
          hidden={!isVisible}
          onClick={() => {scrollToTop()}}
        >
        </SpeedDial>
      </div>
  )
}

export default Layout