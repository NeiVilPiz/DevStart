import { useState } from "react"

import IdeaInput from "../components/IdeaInput"
import ProjectCard from "../components/ProjectCard"
import LoadingCard from "../components/LoadingCard"

import { useProjects } from "../context/ProjectContext"
import { scoreProject } from "../utils/scoreProject"

import type { Project } from "../types/project"

export default function Home() {

  const [idea, setIdea] = useState("")
  const [loading, setLoading] = useState(false)

  const {
    projects,
    addProject,
  } = useProjects()

  const project =
    projects.length > 0
      ? projects[projects.length - 1]
      : null

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

    setLoading(true)

    setTimeout(() => {

      const category =
        detectCategory(idea)

      const newProject: Project = {

        title: category,

        category,

        description:
          `A ${category.toLowerCase()} designed around "${idea}".`,

        problem:
          `Users struggle managing ${idea} efficiently.`,

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

        score: scoreProject(
          idea,
          {
            title: category,
            category,
            description: "",
            problem: "",
            features: [],
            targetUsers: [],
            roadmap: [],
          }
        ),
      }

      addProject(newProject)

      setIdea("")
      setLoading(false)

    }, 800)

  }

  return (

    <main
      className="
      min-h-screen
      bg-black
      text-white
      flex
      justify-center
      items-center
      px-4
      py-10
      sm:px-6
      lg:px-8
    "
    >

      <div
        className="
        w-full
        max-w-4xl
      "
      >

        <h1
          className="
          text-4xl
          sm:text-5xl
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
          Turn startup ideas into structured plans.
        </p>

        <IdeaInput
          idea={idea}
          onIdeaChange={setIdea}
          onGenerate={generateProject}
        />

        {loading && (
          <LoadingCard />
        )}

        {!loading && project && (
          <ProjectCard project={project} />
        )}

      </div>

    </main>

  )

}