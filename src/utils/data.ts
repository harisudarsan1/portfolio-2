import { Project,workExperience, Otherprojects } from '@/utils/types'




export const experience:workExperience[] = [
    {
      role:"TechTeam member",
      company: "Jagriti",
      timeline: "Feb 2023- april 2023",
      details:[
        `Worked on the Footer section and sponsor section of the 
        Jagriti's website. The footer and sponsor both are responsive and the sponsor will be a moving component. `,
        `Worked on entire events page where onclicking the event card modal will pop up with animations.`,
        `The events page is rendered dynamically by fetching data from firebase.`
      ],
      url:"https://jagritissc.com/",
    },
    {
      role:"TechTeam member",
      company: "AMC IIT BHU",
      timeline: "may 2023- june 2023",
      details:[
        `Worked on the entire AMC website which consists of more than 5 pages.`,
        `Team consists of only two members and one tech head in which I was a member`,
      ]
    },{
      role:"Developer",
      company: "Dodao",
      timeline: "august 2022- present",
      details:[
        `Working a chatbot using langchain pinecone and openai`,
        `Worked on creating many web3 courses like solidity course, course on AAVE`,
        `Contributed to homepage website of Dodao`,
      ]
    },
  ]



export const otherProjectsData: Otherprojects[] = [
    {
        title: "p1",
        details: "some details",
        github: "/",
        cta: "/",
        technologies: ["nextjs","javascript"]
    },
    {
        title: "p2",
        details: "sssome details",
        github: "",
        cta: "",
        technologies: ["mui"]
    },
    {
        title: "p3",
        details: "some details",
        github: "/",
        cta: "/",
        technologies: ["tailwind","react","firebase"]
    },
    {
      title: "p1",
      details: "some details",
      github: "/",
      cta: "/",
      technologies: ["nextjs","javascript"]
  },
  {
      title: "p2",
      details: "sssome details",
      github: "",
      cta: "",
      technologies: ["mui"]
  },
  {
      title: "p3",
      details: "some details",
      github: "/",
      cta: "/",
      technologies: ["tailwind","react","firebase"]
  },




]





export const projects: Project[] = [
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