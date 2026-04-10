export interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription?: string
  techStack: string[]
  category: 'ml' | 'nlp' | 'visualization' | 'analysis' | 'deep-learning'
  github?: string
  demo?: string
  image?: string
  metrics?: { label: string; value: string }[]
  featured: boolean
  date: string
}

export interface Skill {
  name: string
  category: 'languages' | 'ml' | 'tools' | 'cloud' | 'visualization'
  level: number
  icon?: string
}

export interface Experience {
  role: string
  company: string
  location: string
  period: string
  current: boolean
  description: string[]
  techStack: string[]
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'kaggle' | 'email'
  url: string
}

export interface NavItem {
  label: string
  href: string
}