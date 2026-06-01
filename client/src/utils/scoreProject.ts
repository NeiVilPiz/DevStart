export function scoreProject(idea: string): number {

  let score = 50

  const text = idea.toLowerCase()


  if (text.length > 10) score += 10

  if (text.includes("app") || text.includes("platform")) {
    score += 10
  }

  if (text.includes("ai") || text.includes("automation")) {
    score += 15
  }

  if (text.includes("tool") || text.includes("system")) {
    score += 10
  }

  if (text.length < 4) score -= 20

  return Math.min(100, Math.max(0, score))
}