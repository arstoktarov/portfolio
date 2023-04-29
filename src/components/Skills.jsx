import React from 'react';
import SectionTitle from './SectionTitle';
import { skills, slash, coding } from '../assets';
import SkillItem from './SkillItem';
import { experiences } from '../constants';

const Skills = () => {
  return (
    <div className='flex flex-row justify-between'>
        <div className='flex flex-row items-center justify-center w-1/2'>
            <div className='w-[200px] h-[200px]'>
                <img src={skills}/>
            </div>
        </div>
        <div className='flex flex-row-reverse flex-wrap'>
            {
                experiences.map((items, index) => (
                    <div key={index} className='flex flex-col'>
                    {
                        items.map((item, index) => (
                            <div key={index} className='flex py-2 px-2'>
                                <SkillItem title={item.title} content={item.content}/>
                            </div>
                        ))
                    }
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Skills