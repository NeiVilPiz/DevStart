import { Request, Response } from "express"
import { ProjectsService } from "../services/projects.service"

export const ProjectsController = {

  getAll: (req: Request, res: Response) => {
    res.json(ProjectsService.getAll())
  },

  getById: (req: Request, res: Response) => {

    const id = Number(req.params.id)

    const project = ProjectsService.getById(id)

    if (!project) {
      return res.status(404).json({ message: "Project not found" })
    }

    res.json(project)
  },

  create: (req: Request, res: Response) => {

    const project = req.body

    const newProject = ProjectsService.create(project)

    res.status(201).json(newProject)
  }

}