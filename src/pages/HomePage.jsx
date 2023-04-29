import React from 'react';
import styles from '../style';
import { Navbar, Hero, Portfolio, Skills, About, Contacts, Footer, SectionTitle } from '../components';
import { Layout } from '../views';

const HomePage = () => {

  return (
    <Layout>
      <div>
        <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <div className='pt-4'>
              <Hero />
            </div>
            <div className='flex flex-col'>
              <div className='py-1'>
                  <SectionTitle title="projects" withLine withNavigation='/projects'/>
              </div>
              <div>
                <Portfolio />
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='py-1'>
                  <SectionTitle title="skills" withLine/>
              </div>
              <div>
              <Skills />
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='py-1'>
                  <SectionTitle title="about-me" withLine/>
              </div>
              <div>
                <About withNavigation/>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='py-1'>
                  <SectionTitle title="contacts" withLine/>
              </div>
              <div>
                <Contacts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage;