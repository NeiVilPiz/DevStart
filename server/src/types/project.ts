export interface Project {
    id: number
    title: string
    category: string
    description: string
    problem: string
    features: string[]
    targetUsers: string[]
    roadmap: string[]
    score?: number
  }