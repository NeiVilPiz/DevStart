import type { Project } from "../types/project"
import { motion } from "framer-motion"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6">

      <div>
        <h2 className="text-3xl font-bold">
          {project.title}
        </h2>

        <p className="text-zinc-400">
          {project.category}
        </p>
      </div>

      {project.score !== undefined && (
        <div className="flex items-center gap-2">
          <span className="text-green-400 font-bold text-xl">
            {project.score}/100
          </span>

          <span className="text-zinc-500">
            Startup Score
          </span>
        </div>
      )}

      <div>
        <h3 className="font-semibold">Description</h3>
        <p className="text-zinc-300">{project.description}</p>
      </div>

      <div>
        <h3 className="font-semibold">Problem</h3>
        <p className="text-zinc-300">{project.problem}</p>
      </div>

      <div>
        <h3 className="font-semibold">Features</h3>
        <ul className="text-zinc-300 space-y-1">
          {project.features.map((f) => (
            <li key={f}>• {f}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">Target Users</h3>
        <ul className="text-zinc-300 space-y-1">
          {project.targetUsers.map((u) => (
            <li key={u}>• {u}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">Roadmap</h3>
        <ul className="text-zinc-300 space-y-1">
          {project.roadmap.map((r) => (
            <li key={r}>• {r}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}