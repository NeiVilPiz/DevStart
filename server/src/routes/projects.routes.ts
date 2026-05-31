import { Router } from "express"
import { ProjectsController } from "../controllers/projects.controller"

const router = Router()

router.get("/", ProjectsController.getAll)
router.get("/:id", ProjectsController.getById)
router.post("/", ProjectsController.create)

export default router