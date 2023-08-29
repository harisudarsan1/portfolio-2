import React from 'react'
import MainCard from '@/components/ProjectCard/MainCard'
import Title from '@/components/Title'
import { Project } from '@/utils/types'
import { projects } from '@/utils/data'




const Projects = () => {
  return (
    <div className=' w-[70%] mx-auto py-40'>
      <Title num='03.' title='Some Things I’ve Built'></Title>

      <div
        className='flex flex-col gap-28'
      >
        {
          projects.map((project, index) =>

            <MainCard
              key={index + 1}
              title={project.title}
              details={project.details}
              technologies={project.technologies}
              leftSide={index % 2 === 0 ? true : false}
              image={project.image}
              github={project.github}
              liveURL={project.liveURL}

            ></MainCard>

          )
        }
      </div>
    </div>
  )
}

export default Projects
