import {
    createContext,
    useContext,
  } from "react"
  
  import {
    useProjectHistory,
  } from "../hooks/useProjectHistory"
  
  import type {
    Project,
  } from "../types/project"
  
  interface ProjectContextType {
  
    projects: Project[]
  
    addProject: (
      project: Project
    ) => void
  
  }
  
  const ProjectContext =
    createContext<
      ProjectContextType
      | undefined
    >(undefined)
  
  export function ProjectProvider({
  
    children,
  
  }: {
  
    children:
      React.ReactNode
  
  }) {
  
    const {
  
      projects,
  
      addProject,
  
    } =
      useProjectHistory()
  
    return (
  
      <ProjectContext.Provider
  
        value={{
  
          projects,
  
          addProject,
  
        }}
  
      >
  
        {children}
  
      </ProjectContext.Provider>
  
    )
  
  }
  
  export function useProjects() {
  
    const context =
      useContext(
        ProjectContext
      )
  
    if (!context) {
  
      throw new Error(
        "useProjects must be used inside ProjectProvider"
      )
  
    }
  
    return context
  
  }