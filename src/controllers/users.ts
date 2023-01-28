import { RequestHandler } from "express"
import { model, Schema, Model, Document } from "mongoose"
import { User } from "../models/user"

export interface IUser extends Document {
  auth0id: string
}

export const createUser: RequestHandler = async (req, res, next) => {
  if (req) {
    // const auth0UserId = (req.body as { auth0UserId: string }).auth0UserId
    // const isUserExist: User | undefined = allUsers.find(
    //   user => user.auth0id === auth0UserId
    // )
    // if (isUserExist === undefined) {
    //   const newUser: User = new User(auth0UserId)
    //   USERS.push(newUser)
    //   res.json({ message: "new user created", userId: newUser })
    //   return
    // }
    const user = new User({
      name: "Roman",
      email: "wm_swan@icloud.com",
      avatar: "OK",
    })

    await user.save()

    console.log(user.email)
    if (user) {
      res.status(200).json({ message: "created" })
    }
  }
}

export const getUsers: RequestHandler = async (req, res, next) => {
  if (req) {
    res.json({ message: "test2" })
  }
}
