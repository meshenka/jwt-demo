import ejwt from 'express-jwt'
import getJwtToken from '../http/request'
import jwt from 'jsonwebtoken'

const audience = process.env.JWT_AUDIENCE
const issuer =  process.env.JWT_ISSUER

export const configureJwtMiddleware = () => {

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