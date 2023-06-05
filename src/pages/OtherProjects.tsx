import React from 'react'
import Title from '@/components/Title'
import Card from '@/components/ProjectCard/Card'
import { Otherprojects } from '@/utils/types'
import { otherProjectsData } from '@/utils/data'
import Link from 'next/link'
import { SmallerText } from '@/components/texts'
import Button from '@/components/Button'

type Props = {}

const OtherProjects = (props: Props) => {
    return (
        <div className='w-[70%] py-40 mx-auto flex flex-col items-center' >
            <Title num='04' title='Other note worthy projects'></Title>
            <Link href="/archive"><SmallerText className='text-center' text='view the archive'></SmallerText></Link>

            <div className='flex flex-col w-full  md:grid md:grid-cols-2 lg:grid-cols-3 py-20 gap-x-4 gap-y-4 ' >
                {
                    otherProjectsData.map((item) => 
                    <Card
                        title={item.title}
                        details={item.details}
                        github={item.github}
                        cta={item.cta}
                        technologies={item.technologies}
                    ></Card>)
                }
            </div>
  <Link href="/archive"> <Button text='show more'></Button></Link> 

        </div>
    )
}

export default OtherProjects