import { useEffect, useState } from "react"

import type { Project } from "../types/project"

export function useProjectHistory() {

  const [projects, setProjects] =
    useState<Project[]>([])

  useEffect(() => {

    const savedProjects =
      localStorage.getItem("projects")

    if (savedProjects) {

      setProjects(
        JSON.parse(savedProjects)
      )

    }

  }, [])

  const addProject = (
    project: Project
  ) => {

    const updatedProjects = [
      ...projects,
      project,
    ]

    setProjects(updatedProjects)

    localStorage.setItem(
      "projects",
      JSON.stringify(
        updatedProjects
      )
    )

  }

  return {

    projects,

    addProject,

  }

}