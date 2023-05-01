import React from 'react';
import { Navbar, Footer } from '../components';
import styles from '../style';
import { useEffect } from 'react';

const Layout = ({children}) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='bg-primary min-h-[100vh] w-[100vw]'>
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
    </div>
  )
}

export default Layout