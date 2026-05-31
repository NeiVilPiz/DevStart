import express from "express"
import cors from "cors"
import projectsRoutes from "./routes/projects.routes"
import { Project } from "./types/project"

const test: Project = {
  id: 1,
  title: "test",
  category: "test",
  description: "test",
  problem: "test",
  features: [],
  targetUsers: [],
  roadmap: []
}

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/projects", projectsRoutes)

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001")
})