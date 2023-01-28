import { auth } from "express-oauth2-jwt-bearer"
import * as dotenv from "dotenv"

dotenv.config()

const auth0ClientDomain: string = process.env.AUTH0_DOMAIN!
const auth0ApiAudience: string = process.env.AUTH0_AUDIENCE!
const auth0ApiSecret: string = process.env.API_SECRET_KEY!
const auth0TokenType: string = process.env.TOKEN_ALGORITHM_TYPE!

export const validateAccessToken = auth({
  issuerBaseURL: `https://${auth0ClientDomain}`,
  audience: auth0ApiAudience,
  secret: auth0ApiSecret,
  tokenSigningAlg: auth0TokenType,
})
