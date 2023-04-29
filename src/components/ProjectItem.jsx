import React from 'react';
import { logo } from '../assets';
import { Button } from './';

const ProjectItem = ({ 
  image = logo, tags, title = 'BoschGame', description = ''
 }) => {

  tags = tags || [
    "HTML", "CSS", "Python", "JavaScript", "PHP", "Laravel"
  ];

  return (
      <div className='flex flex-col max-w-[300px]'>
        <div className="border overflow-hidden">
          <div className="p-4 min-h-[200px] bg-center bg-cover" style={{
            backgroundImage: `url(${image})`,
          }}></div>
          <hr className="border-gray-300" />
          <div className="p-2 flex flex-row flex-wrap">
            {
              tags.map((tag) => (
                <p key={tag} className="text-gray-300 mr-2">{tag}</p>
              ))
            }
          </div>
          <hr className="border-gray-300" />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2 text-white">{title}</h2>
            <p className="text-gray-300">{description != '' ? description : 'An educational game for workers at Bosch company'}</p>
            <div className='mt-3 flex flex-row'>
              <div className='mr-2'>
              <Button title="Github =>"/>
              </div>
              <div className='mr-2'>
              <Button title="Github =>"/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProjectItem