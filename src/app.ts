import { json } from "body-parser"
import express, { Request, Response, NextFunction } from "express"
import { auth } from "express-oauth2-jwt-bearer"
import { validateAccessToken } from "./middleware/auth0.middleware"

import userRoutes from "./routes/users"
import { connectToDatabes } from "./services/database.service"
import cors from "cors"

const app = express()

connectToDatabes().catch(console.dir)

app.use(json())
app.use(cors())
app.use(validateAccessToken)

app.use("/users", userRoutes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ error_message: err.message })
})

app.listen(8000)
