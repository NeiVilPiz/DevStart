const BASE_URL = import.meta.env.VITE_API_URL

export async function getProjects() {
  const res = await fetch(`${BASE_URL}/projects`)
  return res.json()
}

export async function createProject(project: any) {
  const res = await fetch(`${BASE_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(project)
  })

  return res.json()
}