import { useState } from "react"

/* -----------------------------
   🧠 LOGIC (puede moverse luego a /utils)
----------------------------- */

const detectCategory = (idea: string) => {
  const lower = idea.toLowerCase()

  if (lower.includes("developer") || lower.includes("api") || lower.includes("dev")) {
    if (lower.includes("center")) return "Developer Portal Platform"
    return "Developer Tools Platform"
  }

  if (lower.includes("fitness") || lower.includes("gym") || lower.includes("health")) {
    return "Health & Fitness Platform"
  }

  if (lower.includes("shop") || lower.includes("ecommerce") || lower.includes("store")) {
    return "E-commerce Platform"
  }

  if (lower.includes("game")) {
    return "Gaming Platform"
  }

  if (lower.includes("pc") || lower.includes("hardware")) {
    return "Hardware Management Platform"
  }

  if (lower.includes("football") || lower.includes("futbol") || lower.includes("sports")) {
    return "Sports Analytics Platform"
  }

  return "SaaS Startup Platform"
}

const generateName = (category: string) => {
  const prefixes = ["Nova", "Flux", "Core", "Pulse", "Nexus", "Atlas"]

  const suffixMap: Record<string, string> = {
    "Developer Portal Platform": "DevHub",
    "Developer Tools Platform": "BuildFlow",
    "Health & Fitness Platform": "FitCore",
    "E-commerce Platform": "ShopFlow",
    "Gaming Platform": "PlayNexus",
    "Hardware Management Platform": "SysCore",
    "Sports Analytics Platform": "StatsHub",
    "SaaS Startup Platform": "LaunchPad",
  }

  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
  const suffix = suffixMap[category] || "App"

  return `${prefix} ${suffix}`
}

const generateFeatures = (category: string) => {
  const base = ["Authentication system", "Dashboard analytics"]

  const extras: Record<string, string[]> = {
    "Developer Portal Platform": ["API docs hub", "Integration marketplace"],
    "Developer Tools Platform": ["Workflow automation", "Dev tools integration"],
    "Health & Fitness Platform": ["Workout tracking", "Progress analytics"],
    "E-commerce Platform": ["Payment system", "Product catalog"],
    "Gaming Platform": ["Matchmaking system", "Leaderboards"],
    "Hardware Management Platform": ["Device monitoring", "System diagnostics"],
    "Sports Analytics Platform": ["Match statistics", "Player analytics"],
  }

  return [...base, ...(extras[category] || ["Core functionality"])]
}

/* -----------------------------
   🧩 COMPONENT
----------------------------- */

function App() {
  const [idea, setIdea] = useState("")
  const [project, setProject] = useState<any>(null)

  const generateProject = () => {
    if (!idea.trim()) return

    const category = detectCategory(idea)
    const name = generateName(category)
    const features = generateFeatures(category)

    setProject({
      title: name,
      category,
      description: `${category} designed to solve problems related to "${idea}".`,
      features,
      roadmap: [
        "Define MVP scope",
        "Design system architecture",
        "Build frontend UI",
        "Develop backend API",
        "Deploy MVP",
      ],
    })
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="w-full max-w-3xl">

        <h1 className="text-5xl font-bold mb-4">DevLaunch</h1>

        <p className="text-zinc-400 mb-8">
          Turn your idea into a structured startup concept.
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
              <p className="text-zinc-300 whitespace-pre-line">
                {project.description}
              </p>
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