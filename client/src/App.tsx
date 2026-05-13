import { useState } from "react"

function App() {
  const [idea, setIdea] = useState("")
  const [project, setProject] = useState<any>(null)

  // 🧠 1. Detectar categoría real
  const detectCategory = (idea: string) => {
    const lower = idea.toLowerCase()

    if (lower.includes("developer") || lower.includes("dev") || lower.includes("api")) {
      return "Developer Tools Platform"
    }

    if (lower.includes("fitness") || lower.includes("gym") || lower.includes("health")) {
      return "Health & Fitness Platform"
    }

    if (lower.includes("shop") || lower.includes("store") || lower.includes("ecommerce")) {
      return "E-commerce Platform"
    }

    if (lower.includes("game")) {
      return "Gaming Platform"
    }

    if (lower.includes("pc") || lower.includes("hardware") || lower.includes("computer")) {
      return "Hardware Management Platform"
    }

    return "Startup SaaS Platform"
  }

  // 🧠 2. Mejorar nombre (evitar repetir input literal)
  const generateName = (category: string, idea: string) => {
    const clean = idea
      .toLowerCase()
      .replace(/platform|app|system/g, "")
      .trim()

    const prefixes = ["Nova", "Flux", "Core", "Pulse", "Atlas", "Nexus"]

    const random = prefixes[Math.floor(Math.random() * prefixes.length)]

    return `${random} ${category.split(" ")[0]}`
  }

  const generateProject = () => {
    if (!idea.trim()) return

    const category = detectCategory(idea)
    const name = generateName(category, idea)

    const mockProject = {
      title: name,
      category: category,

      description: `A ${category.toLowerCase()} designed to solve problems around "${idea}".`,

      problem: `Users struggle with managing ${idea} efficiently in modern workflows.`,

      features: [
        "Smart dashboard system",
        "User authentication",
        "Real-time analytics",
        "Automation tools",
      ],

      targetUsers: [
        "Freelancers",
        "Small teams",
        "Developers",
      ],

      roadmap: [
        "Define MVP scope",
        "Design system architecture",
        "Build frontend core",
        "Implement backend API",
        "Add automation layer",
        "Deploy MVP",
      ],
    }

    setProject(mockProject)
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="w-full max-w-3xl">

        <h1 className="text-5xl font-bold mb-4">
          DevLaunch
        </h1>

        <p className="text-zinc-400 mb-8">
          Turn any idea into a structured startup concept.
        </p>

        <div className="flex gap-4 mb-10">

          <input
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Enter your idea..."
            className="flex-1 rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-3 outline-none"
          />

          <button
            onClick={generateProject}
            className="bg-white text-black px-6 rounded-xl font-medium"
          >
            Generate
          </button>

        </div>

        {project && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6">

            <div>
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <p className="text-zinc-400">{project.category}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Description</h3>
              <p className="text-zinc-300">{project.description}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Problem</h3>
              <p className="text-zinc-300">{project.problem}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Features</h3>
              <ul className="space-y-1 text-zinc-300">
                {project.features.map((f: string) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Target Users</h3>
              <ul className="space-y-1 text-zinc-300">
                {project.targetUsers.map((u: string) => (
                  <li key={u}>• {u}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Roadmap</h3>
              <ul className="space-y-1 text-zinc-300">
                {project.roadmap.map((r: string) => (
                  <li key={r}>• {r}</li>
                ))}
              </ul>
            </div>

          </div>
        )}

      </div>
    </main>
  )
}

export default App