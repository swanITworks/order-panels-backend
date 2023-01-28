import { Schema, model } from "mongoose"

interface IUser {
  auth0Id: string
}

const userSchema = new Schema<IUser>({
  auth0Id: { type: String, required: true },
})

export const User = model<IUser>("User", userSchema)
