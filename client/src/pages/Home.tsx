import { useEffect, useState } from "react"

import IdeaInput from "../components/IdeaInput"
import ProjectCard from "../components/ProjectCard"

import type { Project } from "../types/project"

export default function Home() {
  const [idea, setIdea] = useState("")
  const [project, setProject] = useState<Project | null>(null)

  // Cargar último proyecto guardado al abrir la app
  useEffect(() => {
    const savedProjects = localStorage.getItem("projects")

    if (!savedProjects) return

    const parsedProjects: Project[] =
      JSON.parse(savedProjects)

    if (parsedProjects.length > 0) {
      setProject(
        parsedProjects[
          parsedProjects.length - 1
        ]
      )
    }
  }, [])

  const detectCategory = (
    idea: string
  ): string => {
    const lower = idea.toLowerCase()

    if (
      lower.includes("developer") ||
      lower.includes("dev") ||
      lower.includes("api")
    ) {
      return "Developer Tools Platform"
    }

    if (
      lower.includes("fitness") ||
      lower.includes("gym")
    ) {
      return "Fitness Platform"
    }

    if (
      lower.includes("shop") ||
      lower.includes("store")
    ) {
      return "E-commerce Platform"
    }

    if (
      lower.includes("pc") ||
      lower.includes("computer")
    ) {
      return "Hardware Management Platform"
    }

    if (
      lower.includes("game")
    ) {
      return "Gaming Platform"
    }

    return "Startup SaaS Platform"
  }

  const generateProject = () => {
    if (!idea.trim()) return

    const category =
      detectCategory(idea)

    const newProject: Project = {
      title: category,

      category,

      description:
        `A ${category.toLowerCase()} ` +
        `designed around "${idea}".`,

      problem:
        `Users struggle managing ` +
        `${idea} efficiently.`,

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

    // Obtener historial previo
    const savedProjects =
      localStorage.getItem("projects")

    const projects: Project[] =
      savedProjects
        ? JSON.parse(savedProjects)
        : []

    // Añadir proyecto nuevo
    const updatedProjects = [
      ...projects,
      newProject,
    ]

    // Guardar historial
    localStorage.setItem(
      "projects",
      JSON.stringify(
        updatedProjects
      )
    )

    setProject(newProject)

    setIdea("")
  }

  return (
    <main
      className="
      min-h-screen
      bg-black
      text-white
      flex
      items-center
      justify-center
      p-8
    "
    >
      <div
        className="
        w-full
        max-w-3xl
      "
      >
        <h1
          className="
          text-5xl
          font-bold
          mb-4
        "
        >
          DevLaunch
        </h1>

        <p
          className="
          text-zinc-400
          mb-8
        "
        >
          Turn ideas into startup concepts.
        </p>

        <IdeaInput
          idea={idea}
          onIdeaChange={setIdea}
          onGenerate={generateProject}
        />

        {project && (
          <ProjectCard
            project={project}
          />
        )}
      </div>
    </main>
  )
}