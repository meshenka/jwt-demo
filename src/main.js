//we have to do this otherwise config does not 
//waterfall in other modules
import _ from './env'

import express from 'express'
import homeRoute from './route/home'
import authRoute from './route/authentification'
import postRoute from './route/posts'

const app = express()


//configure routing
homeRoute(app)
authRoute(app)
postRoute(app)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})