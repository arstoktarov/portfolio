import React from 'react';
import { Layout } from '../views';
import styles from '../style';
import { About, PageTitle, SectionTitle } from '../components';
import { experiences } from '../constants';
import SkillItem from '../components/SkillItem';

const AboutPage = () => {

  const funFacts = [
    'I love playing competitive video games',
    'I like fast-food and coffee',
    'I grew up in 3 different cities',
    'I`ve never experienced travelling',
    'I graduated from the IIT University',
    'I live in Almaty, Kazakhstan'
  ];

  return (
    <Layout>
      <div>
        <div>
          <PageTitle title='about-me' description='who am i?'/>
        </div>
        <div className='pt-8'>
          <About />
        </div>

        <div className='flex flex-col pt-8'>
          <div>
            <SectionTitle title="skills"/>
          </div>
          <div className='flex flex-row flex-wrap'>
            {
              experiences.map((items) => (
                items.map((item, index) => (
                  <div key={index} className='pr-4 py-2'>
                    <SkillItem title={item.title} content={item.content}/>
                  </div>
                ))
              ))
            }
          </div>
        </div>

        <div className='flex flex-col pt-8'>
            <div>
              <SectionTitle title="facts-about-me" />
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-row flex-wrap w-full'>
                {
                  funFacts.map((fact, index) => (
                    <div key={index} className='border border-gray-300 px-2 py-1 mr-2 mb-2 max-w-[400px]'>
                      <p className='text-gray-300'>{fact}</p>
                    </div>
                  ))
                }
              </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage