import type { Project } from "../types/project"

const BASE_URL = "http://localhost:3001/api/projects"

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