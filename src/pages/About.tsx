import React from 'react'
import { motion } from "framer-motion"
import { SmallerText, LargeText } from '@/components/texts'
import Image from 'next/image'
import Title from '@/components/Title'

type Props = {}

const about = ["Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!",
    "Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.",
    "I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.",
    "Here are a few technologies I’ve been working with recently:"]


const About = (props: Props) => {
    return (
        <motion.div
            className='flex flex-col gap-6 basis-2/3'
            initial={{
                opacity: 0,
                y: 20
            }}
            viewport={{ once: false }}
            animate={{
                opacity: 1,
                y: 0,

                transition: {
                    staggerChildren: 0.2,
                    type: "spring",
                    stiffness: 100
                }
            }}
        >
            {about.map((item) =>
                <SmallerText className=' text-lg' text={item}></SmallerText>
            )}

            <div className='flex gap-20 justify-start items-start list-square'>
                <ul>
                    <li>NextJs</li>
                    <li>Express</li>
                    <li>trpc</li>
                </ul>
                <ul>
                    <li>Tailwind</li>
                    <li>ReactJs</li>
                    <li>Typescript</li>
                </ul>

            </div>
        </motion.div>
    )
}

const AboutImage = () => {
    return (
        <Image
            width={500}
            height={500}
            className='flex h-[50%] '
            sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 75vw,
         (max-width: 1060px) 50vw,
         33vw"
            src="/profile.jpg"
            alt="profilepic"
            style={{ objectFit: "cover" }}

        >

        </Image>
    )
}


const AboutPage = () => {
    return (
        <div className='w-[70%] mx-auto my-20'>

            <Title title='About me' num='01.'></Title>

            <div className='flex flex-col-reverse lg:flex-row gap-6'>

                <About></About>
                <AboutImage></AboutImage>
            </div>
        </div>
    )
}

export default AboutPage