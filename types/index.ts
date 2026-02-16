export interface Profile {
  name: string
  role: string
  tagline: string
  bio: string
  yearsExperience: number
  currentFocus: string
  email: string
  socials: Social[]
}

export interface Social {
  name: string
  url: string
  icon: string
}

export interface Skill {
  name: string
  category: SkillCategory
}

export type SkillCategory = 'Frontend' | 'Backend' | 'Databases' | 'DevOps'

export interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  stack: string[]
  features: string[]
  challenges: string[]
  github?: string
  live?: string
  image?: string
}

export interface Experience {
  id: string
  company: string
  location?: string
  position: string
  description?: string
  highlights?: string[]
  startDate: string
  endDate?: string
  current?: boolean
  skills: string[]
}

export interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  category: string
  url?: string
}
