import React from 'react'

const PageTitle = ({title='Page', description='Description'}) => {
  return (
    <div className=''>
        <div className='flex flex-row items-center'>
          <div className='flex flex-col items-start'>
            <h1 className='page-title text-[24px] text-white font-[600]'>{title}</h1>
            <div className='mt-2'>
              <p className='text-gray-100'>{description}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PageTitle