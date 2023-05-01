import React from 'react';
import SectionTitle from './SectionTitle';
import { skills, slash, coding } from '../assets';
import SkillItem from './SkillItem';
import { experiences, knowledge } from '../constants';

const Skills = () => {
  return (
    <div className='flex flex-col items-center md:flex-row md:justify-between md:p-0'>
        <div className='flex flex-row items-center justify-center w-1/2'>
            <div className='w-[200px] h-[200px]'>
                <img src={skills}/>
            </div>
        </div>
        <div className='h-full flex items-center justify-center px-2 md:px-0'>
            <div className='flex flex-row flex-wrap justify-center md:justify-end'>
            {
                knowledge.map((item, index) => (
                    <div key={index} className={`p-2 md:p-0 md:ml-4 md:my-2 ${index == 0 || index == 2 || index == 6 ? '' : ''}`}>
                        <SkillItem title={item.title} content={item.content}/>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Skills