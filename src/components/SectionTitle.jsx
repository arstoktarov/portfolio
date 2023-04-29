import React from 'react'
import { Link } from 'react-router-dom'

const SectionTitle = ({ title = 'projects', withNavigation = '', withLine = false }) => {

  return (
    <div className='py-8'>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-row items-center'>
            <h1 className='header-link text-[24px] text-white'>{title}</h1>
            {
              withLine ?
              <div className='flex-1 ml-5 h-[1px] bg-white max-w-[500px] min-w-[500px]' />
              : ''
            }
          </div>
          {
            withNavigation != '' ? 
            <div className='flex justify-center items-center p-2'>
              <Link to={withNavigation} className='text-white'>{`View more ->`}</Link>
            </div>
            :
            ''
          }
          
        </div>
    </div>
  )
}

export default SectionTitle