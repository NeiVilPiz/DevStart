import type { Project } from "../types/project"

let projects: Project[] = []

export const ProjectsService = {

  getAll: (): Project[] => {
    return projects
  },

  getById: (id: number): Project | undefined => {
    return projects.find(p => p.id === id)
  },

  create: (project: Project): Project => {

    const newProject: Project = {
      ...project,
      id: Date.now()
    }

    projects.push(newProject)

    return newProject
  },

  deleteAll: (): void => {
    projects = []
  }

}