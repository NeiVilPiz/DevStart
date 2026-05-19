interface Project {
    title: string
    category: string
    description: string
    problem: string
    features: string[]
    targetUsers: string[]
    roadmap: string[]
  }
  
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
  
        <div>
          <h3 className="font-semibold mb-1">
            Description
          </h3>
  
          <p className="text-zinc-300">
            {project.description}
          </p>
        </div>
  
        <div>
          <h3 className="font-semibold mb-1">
            Problem
          </h3>
  
          <p className="text-zinc-300">
            {project.problem}
          </p>
        </div>
  
        <div>
          <h3 className="font-semibold mb-2">
            Features
          </h3>
  
          <ul className="space-y-1 text-zinc-300">
            {project.features.map((feature) => (
              <li key={feature}>
                • {feature}
              </li>
            ))}
          </ul>
        </div>
  
        <div>
          <h3 className="font-semibold mb-2">
            Target Users
          </h3>
  
          <ul className="space-y-1 text-zinc-300">
            {project.targetUsers.map((user) => (
              <li key={user}>
                • {user}
              </li>
            ))}
          </ul>
        </div>
  
        <div>
          <h3 className="font-semibold mb-2">
            Roadmap
          </h3>
  
          <ul className="space-y-1 text-zinc-300">
            {project.roadmap.map((step) => (
              <li key={step}>
                • {step}
              </li>
            ))}
          </ul>
        </div>
  
      </div>
    )
  }