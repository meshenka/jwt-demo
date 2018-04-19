import jwt from 'express-jwt'
import getJwtToken from '../http/request'

export const configureJwtMiddleware = () => {
  return jwt({ 
    secret: process.env.JWT_SECRET,
    audience: 'http://jwt-demo/api',
    issuer: 'http://jwt-demo',
    credentialsRequired: false,
    getToken: getJwtToken
  })
}