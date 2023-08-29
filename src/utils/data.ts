import { Project, workExperience, Otherprojects } from '@/utils/types'



export const Herocontent = `
Iam a full stack developer. Opensource enthusiast seeks to contribute to opensource projects. Currently focusing on CLI and trying to write my own browser 
`

export const AboutContent = `
Hello! My name is Harisudarsan. I started with web  development
`


export const experience: workExperience[] = [
  {
    role: "TechTeam member",
    company: "Jagriti",
    timeline: "Feb 2023- april 2023",
    details: [
      `Worked on the Footer section and sponsor section of the 
        Jagriti's website. The footer and sponsor both are responsive and the sponsor will be a moving component. `,
      `Worked on entire events page where onclicking the event card modal will pop up with animations.`,
      `The events page is rendered dynamically by fetching data from firebase.`
    ],
    url: "https://jagritissc.com/",
  },
  {
    role: "TechTeam member",
    company: "AMC IIT BHU",
    timeline: "may 2023- june 2023",
    details: [
      `Worked on the entire AMC website which consists of more than 5 pages.`,
      `Team consists of only two members and one tech head in which I was a member`,
    ]
  }, {
    role: "Developer",
    company: "Dodao",
    timeline: "august 2022- present",
    details: [
      `Working a chatbot using langchain pinecone and openai`,
      `Worked on creating many web3 courses like solidity course, course on AAVE`,
      `Contributed to homepage website of Dodao`,
    ]
  },
]



export const otherProjectsData: Otherprojects[] = [
  {
    title: "CLI",
    details: "A simple CLI app built with goland and cobra",
    github: "https://github.com/HARI-124/StringerCLI",
    cta: "/",
    technologies: ["go"]
  }, {
    title: "E-HealthRecord",
    details: "This is a group project which uses gcp api in FHIR standards to store health related data",
    github: "/",
    cta: "/",
    technologies: ["nextjs", "javascript"]
  },

  {
    title: "Web scrapper",
    details: "Simple webscrapper built with nodejs",
    github: "https://github.com/HARI-124/Web-scrapper",
    cta: "",
    technologies: ["Nodejs"]
  },
  {
    title: "Remodelled website",
    details: "This is a simple clone of our college Ecell website",
    github: "https://github.com/HARI-124/Ecell-remodel",
    cta: "/",
    technologies: ["React", "Bootstrap"]
  },

]





export const projects: Project[] = [
  {
    title: "cslang",
    details:
      `A programming language written in golang from scratch`,
    technologies: ["golang"],
    image: `cslang.png`,
    github: `https://github.com/HARI-124/cslang`,
    liveURL: `https://github.com/HARI-124/cslang`,
  },
  {
    title: "Genesiz",
    details:
      ` A Production level website for a private company. 
   Fully responsive professional website which is fully automated using github
   
   `,
    technologies: ["React", "firebase", "tailwind", "github", ""],
    image: `Genesiz.png`,
    github: `https://github.com/Website-Backup/Genesizmep`,
    liveURL: `https://genesizmep.in`,
  },

  {
    title: "Trello clone",
    details:
      ` Implementation of Trello with drag and drop feature`,
    technologies: ["Nextjs", "Appwrite", "tailwind", "react-beautiful-dnd",],
    image: `trelloclone.png`,
    github: `https://github.com/HARI-124/TrelloClone`,
    liveURL: ``,
  },

]