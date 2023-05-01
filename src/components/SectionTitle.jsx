import React from 'react'
import { Link } from 'react-router-dom'

const SectionTitle = ({ title = 'projects', withNavigation = '', withLine = false }) => {

  return (
    <div className='py-8 px-4 md:px-0'>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-row items-center'>
            <h1 className='header-link text-[24px] text-white'>{title}</h1>
          </div>
          {
            withLine ?
            <div className='flex-1 ml-4 h-[1px] bg-white' />
            : ''
          }
          {
            withNavigation != '' ? 
            <div className='flex justify-center items-center ml-4'>
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