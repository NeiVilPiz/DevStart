import ProjectCard from "../components/ProjectCard"
import { useProjectHistory } from "../hooks/useProjectHistory"

export default function Dashboard() {

  const { projects } = useProjectHistory()

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">

        <h1 className="text-5xl font-bold mb-8">
          Project History
        </h1>

        {projects.length === 0 ? (
          <p>No projects yet.</p>
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