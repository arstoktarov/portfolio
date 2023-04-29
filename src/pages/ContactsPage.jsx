import React from 'react'
import { Layout } from '../views'
import { Contacts, PageTitle, SectionTitle } from '../components'
import { discord } from '../assets'
import { contactMedia } from '../constants'
import { Link } from 'react-router-dom'

const ContactsPage = () => {
  return (
    <Layout>
        <div className='flex flex-col'>
            <div>
                <PageTitle title='contacts' description='send me message'/>
            </div>
            <div className='mt-8'>
                <Contacts />
            </div>
            <div className=''>
                <SectionTitle title='all-media'/>
                <div className='flex flex-row'>
                    {
                        contactMedia.map((media, index) => (
                            <div key={index} className='flex flex-row items-center mr-8'>
                                <div className='w-[30px] h-[30px] overflow-hidden flex justify-center items-center'>
                                <img src={media.icon} alt='discordIcon' />
                                </div>
                                <div className='ml-2'>
                                    <Link to={media.link} target="_blank" rel='noopener noreferrer' className='text-gray-300'>{media.title}</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default ContactsPage