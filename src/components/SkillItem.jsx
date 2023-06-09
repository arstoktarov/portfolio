import React from 'react'
import { useTranslation } from 'react-i18next'

const SkillItem = ({ title = 'Languages', content = ['PHP', 'HTML', 'CSS', 'JavaScript', 'C#'] }) => {

    const { t } = useTranslation();

  return (
    <div className='border border-gray-300 max-w-[140px]'>
        <div className='px-2 py-1'>
            <p className='text-white font-[500]'>{t(title)}</p>
        </div>
        <hr className='bg-white'/>
        <div className='flex flex-row flex-wrap px-2 py-1'>
            {
                content.map((title, index) => (
                    <div key={index} className='pr-2'>
                        <p className='text-gray-300'>{title}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SkillItem