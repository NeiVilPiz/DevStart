import type { Project } from "../types/project"

export function scoreProject(
  idea: string,
  project: Project
): number {

  let score = 50

  const text =
    idea.toLowerCase()

  // claridad de idea
  if (text.length > 10)
    score += 10

  // palabras clave fuertes
  if (
    text.includes("app") ||
    text.includes("platform")
  ) {
    score += 10
  }

  if (
    text.includes("ai") ||
    text.includes("automation")
  ) {
    score += 15
  }

  if (
    text.includes("tool") ||
    text.includes("system")
  ) {
    score += 10
  }

  // penalización si es muy genérico
  if (
    text.length < 4
  ) {
    score -= 20
  }

  return Math.min(
    100,
    Math.max(0, score)
  )
}