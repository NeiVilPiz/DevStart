import type { Project } from "../types/project"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

interface ProjectCardProps {
  project: Project
  clickable?: boolean
}

export default function ProjectCard({
  project,
  clickable = false
}: ProjectCardProps) {

  const navigate = useNavigate()

  return (
    <motion.div
      onClick={() => {
        if (clickable) {
          navigate(`/project/${project.id}`)
        }
      }}

      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}

      whileHover={clickable ? { scale: 1.02, y: -3 } : {}}

      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}

      className={`
        bg-zinc-900
        border border-zinc-800
        rounded-2xl
        p-6
        space-y-4
        transition
        ${clickable ? "cursor-pointer hover:border-zinc-700" : ""}
      `}
    >

      <div className="space-y-1">

        <h2 className="text-2xl font-bold tracking-tight">
          {project.title}
        </h2>

        <p className="text-zinc-400 text-sm">
          {project.category}
        </p>

      </div>

      {project.score !== undefined && (
        <div className="flex items-center justify-between">

          <span className="text-green-400 font-bold text-lg">
            {project.score}/100
          </span>

          <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400">
            AI Score
          </span>

        </div>
      )}

      <p className="text-zinc-300 text-sm leading-relaxed line-clamp-3">
        {project.description}
      </p>

      <div className="space-y-1">

        <p className="text-zinc-500 text-xs uppercase tracking-wide">
          Key features
        </p>

        <ul className="text-zinc-400 text-sm space-y-1">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature}>• {feature}</li>
          ))}
        </ul>

      </div>

    </motion.div>
  )
}