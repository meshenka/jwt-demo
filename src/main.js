import express from 'express'
import dotenv from 'dotenv'
import {configureJwtMiddleware, createJwtToken} from './jwt/middleware'
import posts from '../data/posts.json'

dotenv.config()

const app = express()
const jwtMiddleware = configureJwtMiddleware()

app.get('/', function (req, res) {
  res.json({data: 'Hello World!'})
})

// get CSRF
app.get('/user/login', function(req, res) {
  res.json({csrf_login: 'hdsjhdsquç_è1561564654'})
})

// get AUTH and deliver JWT Token
app.post('/user/login', function(req, res) {
  // @TODO validate credentials

  const token = createJwtToken({ foo: 'bar' })
  console.log(token)
  res.setHeader('Authorization', 'Bearer ' + token)  
  res.json({token: token})
  
})


// Secured paths
app.get('/api/v1/posts', jwtMiddleware, function(req, res) {
  if (!req.user) return res.sendStatus(401)
  res.json(posts)
})

// Secured paths
app.get('/api/v1/post/:postId', jwtMiddleware, function(req, res) {
  if (!req.user) return res.sendStatus(401)

  console.log(req.params.postId)

  const post = posts.filter(post => {
    return post.id == req.params.postId
  })

  if (post.length == 0) {
    return res.status(404).send('Not found');
  }
  
  res.json(post[0])
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})