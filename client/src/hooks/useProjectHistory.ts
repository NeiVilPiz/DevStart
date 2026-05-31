import { useEffect, useState } from "react"
import type { Project } from "../types/project"
import { getProjects, createProject } from "../api/projectsApi"

export function useProjectHistory() {

  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {

    const loadProjects = async () => {

      try {

        setLoading(true)

        const data = await getProjects()

        setProjects(data)

      } catch (err) {

        console.error(err)

        setError("Error loading projects")

      } finally {

        setLoading(false)

      }
    }

    loadProjects()

  }, [])

  const addProject = async (project: Project) => {

    try {

      const newProject = await createProject(project)

      setProjects((prev) => [
        ...prev,
        newProject
      ])

    } catch (err) {

      console.error(err)

      setError("Error creating project")

    }
  }

  return {

    projects,
    addProject,
    loading,
    error

  }

}