import { useEffect, useState } from "react"

import IdeaInput from "../components/IdeaInput"
import ProjectCard from "../components/ProjectCard"

import type { Project } from "../types/project"

export default function Home() {
  const [idea, setIdea] = useState("")
  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    const savedProjects = localStorage.getItem("projects")

    if (savedProjects) {
      const parsed = JSON.parse(savedProjects)

      if (parsed.length > 0) {
        setProject(parsed[parsed.length - 1])
      }
    }
  }, [])

  const detectCategory = (idea: string) => {
    const lower = idea.toLowerCase()

    if (lower.includes("developer")) {
      return "Developer Tools Platform"
    }

    if (lower.includes("fitness")) {
      return "Fitness Platform"
    }

    if (lower.includes("shop")) {
      return "E-commerce Platform"
    }

    return "Startup SaaS Platform"
  }

  const generateProject = () => {
    if (!idea.trim()) return

    const category = detectCategory(idea)

    const newProject: Project = {
      title: category,
      category,
      description: `A ${category.toLowerCase()} designed around "${idea}".`,
      problem: `Users struggle managing ${idea} efficiently.`,
      features: [
        "Authentication system",
        "Analytics dashboard",
        "Automation tools",
      ],
      targetUsers: [
        "Developers",
        "Freelancers",
        "Teams",
      ],
      roadmap: [
        "Build MVP",
        "Create backend",
        "Deploy platform",
      ],
    }

    const savedProjects = localStorage.getItem("projects")

    const projects: Project[] = savedProjects
      ? JSON.parse(savedProjects)
      : []

    const updatedProjects = [...projects, newProject]

    localStorage.setItem(
      "projects",
      JSON.stringify(updatedProjects)
    )

    setProject(newProject)
    setIdea("")
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">

      <div className="w-full max-w-3xl">

        <h1 className="text-5xl font-bold mb-4">
          DevLaunch
        </h1>

        <p className="text-zinc-400 mb-8">
          Turn ideas into startup concepts.
        </p>

        <IdeaInput
          idea={idea}
          onIdeaChange={setIdea}
          onGenerate={generateProject}
        />

        {project && (
          <ProjectCard project={project} />
        )}

      </div>

    </main>
  )
}