import React from 'react'
import { Layout } from '../views'
import { Contacts, PageTitle, SectionTitle } from '../components'
import { discord } from '../assets'
import { contactMedia } from '../constants'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ContactsPage = () => {
    const { t } = useTranslation();
  return (
    <Layout>
        <div className='flex flex-col'>
            <div>
                <PageTitle title={t("contacts")} description={t('send_me_message')}/>
            </div>
            <div className='mt-8'>
                <Contacts />
            </div>
            <div className=''>
                <SectionTitle title={t('all_media')}/>
                <div className='flex flex-row'>
                    {
                        contactMedia.map((media, index) => (
                            <div key={index} className='flex flex-row items-center mr-8'>
                                <div className='w-[25px] h-[25px] overflow-hidden flex justify-center items-center'>
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