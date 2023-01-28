import { Router } from "express"
import { createUser, getUsers } from "../controllers/users"

const router = Router()

router.post("/", createUser)

router.get("/", getUsers)

router.patch("/:id")

router.delete("/:id")

export default router