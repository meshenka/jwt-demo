import ejwt from 'express-jwt'
import getJwtToken from '../http/request'
import jwt from 'jsonwebtoken'

const audience = 'https://jwt-demo/api'
const issuer =  'https://jwt-demo'

export const configureJwtMiddleware = () => {
  console.log("JWT SECRET", process.env.JWT_SECRET)

  return ejwt({ 
    secret: process.env.JWT_SECRET,
    audience: audience,
    issuer: issuer,
    credentialsRequired: false,
    getToken: getJwtToken
  })
}

export const createJwtToken = (payload) => {
  payload.aud = audience
  payload.iss = issuer
  console.log(payload)
  return jwt.sign(payload, process.env.JWT_SECRET)
}