import { useEffect, useState } from "react"

import type { Project } from "../types/project"

export function useProjectHistory() {

  const [projects, setProjects] =
    useState<Project[]>([])

  useEffect(() => {

    const saved =
      localStorage.getItem("projects")

    if (!saved) return

    try {

      setProjects(JSON.parse(saved))

    } catch (error) {

      console.error("Invalid localStorage data")

      localStorage.removeItem("projects")

      setProjects([])

    }

  }, [])

  const addProject = (project: Project) => {

    setProjects(prev => {

      const updated = [...prev, project]

      localStorage.setItem(
        "projects",
        JSON.stringify(updated)
      )

      return updated

    })

  }

  return {
    projects,
    addProject,
  }

}