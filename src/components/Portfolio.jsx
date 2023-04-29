import React from 'react';
import { SectionTitle, ProjectItem } from './';
import { projects } from '../constants';

const Portfolio = () => {
  return (
      <div className='flex flex-row flex-wrap'>
        {
          projects.map((item, index) => (
            <div key={index} className={`w-full md:w-1/3 ${index < projects.length - 1 ? 'pr-3' : ''}`}>
            <ProjectItem title={item.title} image={item.image} description={item.description} tags={item.tags} links={item.links}/>
          </div>
          ))
        }
      </div>
  )
}

export default Portfolio