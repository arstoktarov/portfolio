import React from 'react';
import { Layout } from '../views';
import { PageTitle, ProjectItem, SectionTitle } from '../components';
import styles from '../style';
import { frontProjects, backProjects } from '../constants';
import { useTranslation } from 'react-i18next';

const ProjectsPage = () => {
    const { t } = useTranslation();
  return (
    <Layout>
        <div className='flex flex-col'>
            <div>
                <PageTitle title={t("projects")} description={t("list_of_projects")}/>
            </div>
            
            <div>
                <div>
                    <SectionTitle title="back-end"/>
                </div>
                <div className='flex flex-row flex-wrap'>
                    {
                        backProjects.map((item, index) => (
                            <div key={index} className='mr-4'>
                                <ProjectItem title={item.title} image={item.image} description={item.description} tags={item.tags} links={item.links}/>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex flex-col'>
                <div>
                    <SectionTitle title="front-end"/>
                </div>
                <div className='flex flex-row flex-wrap'>
                    {
                        frontProjects.map((item, index) => (
                            <div key={index} className='mr-4'>
                                <ProjectItem title={item.title} image={item.image} description={item.description} tags={item.tags} links={item.links}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default ProjectsPage