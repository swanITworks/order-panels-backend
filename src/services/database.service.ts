import * as dotenv from "dotenv"
import { connect } from "mongoose"

dotenv.config()

const userName: string = process.env.MONGO_DB_USER_NAME!
const password: string = process.env.MONGO_DB_PASSOWRD!
const dbUrl: string = process.env.MONGO_DB_URL!
const dbName: string = process.env.MONGO_DB_NAME!

const uri: string = `mongodb+srv://${userName}:${password}@${dbUrl}${dbName}?retryWrites=true&w=majority`

export async function connectToDatabes() {
  try {
    connect(uri)
  } catch (e) {
    console.log(e)
  }
}
