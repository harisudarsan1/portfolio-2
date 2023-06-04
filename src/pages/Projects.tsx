import React from 'react'
import MainCard from '@/components/ProjectCard/MainCard'
import Title from '@/components/Title'

type Project = {
  title: string,
  details: string,
  technologies: string[],
  leftSide: boolean,
  image: string,
  github: string,
  liveURL: string,
}


const projects: Project[] = [
  {
    title: "Genesiz",
    details:
      ` A Production level website for a private company. 
   Fully responsive professional website which is fully automated using github
   
   `,
    technologies: ["React", "firebase", "tailwind", "github", ""],
    leftSide: false,
    image: `Genesiz.png`,
    github: `https://github.com/Website-Backup/Genesizmep`,
    liveURL: ``,
  },
  {
    title: "e-healthrecord",
    details:
      ` 
   It is a fully working e-health record app according to the FHIR standards. 
   It is a full stack app which makes api calls to gcp healthcare api and backend is managed using nodeJs.
   The server is hosted in the GCP amd instance.
   
   `,
    technologies: ["React", "GCP", "tailwind", "github", "NodeJs"],
    leftSide: true,
    image: `Genesiz.png`,
    github: `/`,
    liveURL: `/`,
  }, {
    title: "Genesiz",
    details:
      ` A Production level website for a private company. 
   Fully responsive professional website which is fully automated using github
   
   `,
    technologies: ["React", "firebase", "tailwind", "github"],
    leftSide: false,
    image: `Genesiz.png`,
    github: `/`,
    liveURL: `/`,
  },
]


const Projects = () => {
  return (
    <div className=' w-[70%] mx-auto py-40'>
      <Title num='03.' title='Some Things I’ve Built'></Title>

      <div
        className='flex flex-col gap-28'
      >
        {
          projects.map((project) =>

            <MainCard
              title={project.title}
              details={project.details}
              technologies={project.technologies}
              leftSide={project.leftSide}
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