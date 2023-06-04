"use client";
import Image from 'next/image'
import Hero from '@/pages/Hero'
import AboutPage from '@/pages/About'
import Work from '@/pages/Work';
import Projects from '@/pages/Projects';

export default function Home() {
  return (

    <main className=''>
      <Hero></Hero>
      <AboutPage></AboutPage>
      <Work></Work>
      <Projects></Projects>

    </main>
  )
}
