import React from 'react'
import Title from '@/components/Title'
import { SmallText,SmallerText } from '@/components/texts'
import TabComponent from '@/components/TabComponent'

type workExperience ={
  role:string,
  company:string,
  timeline:string,
  details?:string[],
  url?:string,
}
type Props = {}


const experience:workExperience[] = [
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


const Work = (props: Props) => {
  return (
    <div className=' w-[70%] mx-auto py-40 '>
      <Title num='02.' title={`Where I've Worked `}></Title>
      <TabComponent
      experience={experience}
      ></TabComponent>
      
    </div>
  )
}

export default Work