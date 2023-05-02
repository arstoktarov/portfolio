import React from 'react';
import styles from '../style';
import { Navbar, Hero, Portfolio, Skills, About, Contacts, Footer, SectionTitle } from '../components';
import { Layout } from '../views';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className='pt-4'>
        <Hero />
      </div>
      <div className='flex flex-col'>
        <div className='py-1'>
            <SectionTitle title={t("projects")} withLine withNavigation='/projects'/>
        </div>
        <div>
          <Portfolio />
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='py-1'>
            <SectionTitle title={t("skills")} withLine/>
        </div>
        <div>
          <Skills />
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='py-1'>
            <SectionTitle title={t("about_me")} withLine/>
        </div>
        <div>
          <About withNavigation/>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='py-1'>
            <SectionTitle title={t("contacts")} withLine/>
        </div>
        <div>
          <Contacts />
        </div>
      </div>
    </Layout>
  )
}

export default HomePage;