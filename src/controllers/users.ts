import { RequestHandler } from "express"
import { model, Schema, Model, Document } from "mongoose"
import { User } from "../models/user"

export interface IUser extends Document {
  auth0id: string
}

export const checkUser: RequestHandler = async (req, res, next) => {
  // if (req) {
  //   const userAuth0IdInRequest: string = req.params.userAuth0Id

  //   const findUser = await User.findOne({ auth0Id: userAuth0IdInRequest })

  //   if (!findUser) {
  //     const user = new User({
  //       auth0Id: userAuth0IdInRequest,
  //     })
  //     await user.save()
  //     if (user) {
  //       res.status(200).json({
  //         message:
  //           "We couldn't find a user withh the requested id, we created a new one.",
  //         user,
  //       })
  //     }
  //     res.status(200).json({ message: "Something goes wrong" })
  //   }
  //   res.json(findUser)
  // }
  res.json({ message: "ok" })
}

export const getAllUsers: RequestHandler = async (req, res, next) => {
  if (req) {
    const allUsers = await User.find()
    res.json(allUsers)
  }
}

export const getUsersDataByAuth0Id: RequestHandler = async (req, res, next) => {
  if (req) {
    const userAuth0IdInRequest: string = req.params.userAuth0Id
    if (userAuth0IdInRequest) {
      res.json(userAuth0IdInRequest)
    }
    res.json({ message: "Please provide user id" })
  }
}
