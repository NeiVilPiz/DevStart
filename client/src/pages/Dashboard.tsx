import { useEffect, useState } from "react"

import ProjectCard from "../components/ProjectCard"

import type { Project } from "../types/project"

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const savedProjects = localStorage.getItem("projects")

    if (savedProjects) {
      setProjects(JSON.parse(savedProjects))
    }
  }, [])

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-4xl mx-auto space-y-8">

        <h1 className="text-5xl font-bold">
          Project History
        </h1>

        {projects.length === 0 ? (
          <p className="text-zinc-400">
            No projects generated yet.
          </p>
        ) : (
          projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))
        )}

      </div>

    </main>
  )
}