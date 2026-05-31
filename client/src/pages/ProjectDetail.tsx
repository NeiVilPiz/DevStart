import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"

import { useProjectHistory } from "../hooks/useProjectHistory"

export default function ProjectDetail() {

  const { id } = useParams()
  const { projects } = useProjectHistory()

  const project = projects.find(
    (p) => p.id === Number(id)
  )

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Project not found
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">

      <motion.div
        className="max-w-3xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >

        <Link
          to="/dashboard"
          className="text-zinc-400 hover:text-white transition"
        >
          ← Back to Dashboard
        </Link>

        <div className="space-y-2">

          <h1 className="text-5xl font-bold">
            {project.title}
          </h1>

          <p className="text-zinc-400 text-lg">
            {project.category}
          </p>

          {project.score !== undefined && (
            <div className="inline-block mt-3 px-3 py-1 rounded-full bg-green-500/10 text-green-400 font-semibold">
              Score: {project.score}/100
            </div>
          )}

        </div>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-zinc-200">
            Description
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            {project.description}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-zinc-200">
            Problem
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            {project.problem}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-200">
            Features
          </h2>

          <ul className="space-y-2 text-zinc-400">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2"
              >
                <span className="text-white">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-200">
            Target Users
          </h2>

          <ul className="space-y-2 text-zinc-400">
            {project.targetUsers.map((user) => (
              <li key={user}>
                • {user}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-200">
            Roadmap
          </h2>

          <div className="space-y-3">
            {project.roadmap.map((step, index) => (
              <div
                key={step}
                className="flex gap-3 items-start"
              >
                <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs">
                  {index + 1}
                </div>

                <p className="text-zinc-400">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

      </motion.div>

    </main>
  )
}