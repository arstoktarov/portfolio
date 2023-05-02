import React from 'react';
import { Navbar, Footer } from '../components';
import styles from '../style';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Layout = ({children}) => {
  const { t, i18n } = useTranslation();

  console.log(i18n.language);

  const changeLanguageHandler = (lang = "en") =>
  {
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='bg-primary min-h-[100vh] w-[100vw] relative'>
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className='flex-1 text-white'>
          <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.paddingY}`}>
            {children}
          </div>
          </div>
        </div>

        <hr className='bg-white h-[100%]'/>

        <div className={`${styles.flexStart} min-h-[150px]`}>
          <div className={`${styles.boxWidth} py-5`}>
            <Footer />
          </div>
        </div>

        <div className='hidden md:flex fixed flex-col items-center left-0 top-0 w-[50px] h-[400px]'>
          <div className='h-full bg-white w-[1px]'></div>
          <div className='text-white flex flex-col mt-2'>
            <a onClick={() => {changeLanguageHandler("ru")}} className={`${i18n.language != 'ru' ? 'underline cursor-pointer' : ''} hover:no-underline`}>RU</a>
            <a onClick={() => {changeLanguageHandler("en")}} className={`${i18n.language != 'en' ? 'underline cursor-pointer' : ''} hover:no-underline`}>EN</a>
          </div>
        </div>


    </div>
  )
}

export default Layout