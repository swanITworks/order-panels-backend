import { Router } from "express"
import {
  checkUserAndCreateNewOneIfNotExist,
  getAllUsers,
  getUsersDataByAuth0Id,
} from "../controllers/users"

const router = Router()

router.get("/:userAuth0Id", checkUserAndCreateNewOneIfNotExist)

//router.get("/", getAllUsers)

//router.get("/:userAuth0Id", getUsersDataByAuth0Id)

// router.patch("/:id")

// router.delete("/:id")

export default router
