export type Otherprojects = {
    title:string,
    details:string,
    github?:string,
    cta?:string,
    technologies: string[]
  }
export type Project = {
    title: string,
    details: string,
    technologies: string[],
    leftSide: boolean,
    image: string,
    github: string,
    liveURL: string,
  }
export type workExperience = {
    role: string,
    company: string,
    timeline: string,
    details?: string[],
    url?: string,
  }