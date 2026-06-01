import type { Project } from "../types/project"

const BASE_URL = import.meta.env.VITE_API_URL + "/projects"

export async function getProjects(): Promise<Project[]> {
  const res = await fetch(BASE_URL)
  return res.json()
}

export async function createProject(project: Project): Promise<Project> {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(project)
  })

  return res.json()
}