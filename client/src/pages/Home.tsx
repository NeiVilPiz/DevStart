import { useState } from "react"

import IdeaInput from "../components/IdeaInput"
import ProjectCard from "../components/ProjectCard"

import { useProjects } from "../context/ProjectContext"

import { scoreProject } from "../utils/scoreProject"

import type { Project } from "../types/project"

export default function Home() {

  const [idea, setIdea] = useState("")

  const { projects, addProject } =
    useProjects()

  const project =
    projects[projects.length - 1] || null

  const detectCategory = (idea: string): string => {

    const lower = idea.toLowerCase()

    if (lower.includes("developer") || lower.includes("api")) {
      return "Developer Tools Platform"
    }

    if (lower.includes("fitness") || lower.includes("gym")) {
      return "Fitness Platform"
    }

    if (lower.includes("shop") || lower.includes("store")) {
      return "E-commerce Platform"
    }

    if (lower.includes("ai")) {
      return "AI Platform"
    }

    return "Startup SaaS Platform"
  }

  const generateProject = () => {

    if (!idea.trim()) return

    const category = detectCategory(idea)

    const baseProject: Project = {
      title: category,
      category,
      description: `A ${category.toLowerCase()} built around "${idea}".`,
      problem: `Users struggle with ${idea}.`,
      features: [
        "Authentication system",
        "Dashboard analytics",
        "Automation tools",
      ],
      targetUsers: [
        "Developers",
        "Freelancers",
        "Startups",
      ],
      roadmap: [
        "Build MVP",
        "Develop backend",
        "Deploy product",
      ],
    }

    const newProject: Project = {
      ...baseProject,
      score: scoreProject(idea, baseProject),
    }

    addProject(newProject)

    setIdea("")
  }

  return (

    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">

      <div className="w-full max-w-3xl">

        <h1 className="text-5xl font-bold mb-4">
          DevLaunch
        </h1>

        <p className="text-zinc-400 mb-8">
          Turn ideas into startup concepts
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