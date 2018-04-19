import express from 'express'
import dotenv from 'dotenv'
import configureJwtMiddleware from './jwt/middleware'

dotenv.config()

const app = express()
const jwtMiddleware = configureJwtMiddleware()

app.get('/', function (req, res) {
  res.send(JSON.stringify({data: 'Hello World!'}))
})

// get CSRF
app.get('/user/login', function(req, res) {

})

// get AUTH and deliver JWT Token
app.post('/user/login', function(req, res) {

})


// Secured paths
app.post('/api/v1/posts', jwtMiddleware, function(req, res) {

})

// Secured paths
app.post('/api/v1/post/{id}', jwtMiddleware, function(req, res) {

})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})