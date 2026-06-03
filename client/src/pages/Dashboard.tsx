import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import ProjectCard from "../components/ProjectCard"
import { useProjects } from "../context/ProjectContext"

export default function Dashboard() {

  const { projects } = useProjects()

  const [categoryFilter, setCategoryFilter] = useState("")
  const [scoreFilter, setScoreFilter] = useState(0)

  const totalProjects = projects.length

  const averageScore =
    totalProjects > 0
      ? Math.round(
          projects.reduce((acc, p) => acc + (p.score || 0), 0) /
          totalProjects
        )
      : 0

  const latestProject = projects[projects.length - 1]

  const filteredProjects = projects.filter((project) => {
    return (
      project.category.toLowerCase().includes(categoryFilter.toLowerCase()) &&
      (project.score || 0) >= scoreFilter
    )
  })

  return (
    <main className="min-h-screen bg-black text-white p-6">

      <div className="max-w-6xl mx-auto space-y-10">

        {/* HEADER */}
        <div>
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="text-zinc-400 mt-2">
            Overview of your startup ideas
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <p className="text-zinc-400 text-sm">Total Projects</p>
            <p className="text-2xl font-bold">{totalProjects}</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <p className="text-zinc-400 text-sm">Average Score</p>
            <p className="text-2xl font-bold">{averageScore}</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <p className="text-zinc-400 text-sm">Latest</p>
            <p className="text-sm font-semibold truncate">
              {latestProject?.title || "—"}
            </p>
          </div>

        </div>

        {/* FILTERS */}
        <div className="flex flex-col md:flex-row gap-4">

          <input
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            placeholder="Filter category..."
            className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 flex-1"
          />

          <input
            type="number"
            value={scoreFilter}
            onChange={(e) => setScoreFilter(Number(e.target.value))}
            placeholder="Min score"
            className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 w-full md:w-40"
          />

        </div>

        {/* EMPTY STATE */}
        {projects.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-zinc-800 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">
              No projects yet
            </h2>
            <p className="text-zinc-400">
              Go to Home and generate your first idea
            </p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-xl font-bold mb-2">
              No projects found
            </h2>
            <p className="text-zinc-400">
              Adjust your filters
            </p>
          </div>
        ) : (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                clickable
              />
            ))}
          </motion.div>
        )}

      </div>

    </main>
  )
}