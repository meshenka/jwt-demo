import posts from '../../data/posts.json'
import {configureJwtMiddleware} from '../jwt/middleware'


const jwtMiddleware = configureJwtMiddleware()

export default (app) => {

  // Secured paths
  app
    .get('/api/v1/posts', jwtMiddleware, function (req, res) {
      if (!req.user) 
        return res.sendStatus(401)
      res.json(posts)
    })

  // Secured paths
  app.get('/api/v1/post/:postId', jwtMiddleware, function (req, res) {
    if (!req.user) 
      return res.sendStatus(401)

    console.log(req.params.postId)

    const post = posts.filter(post => {
      return post.id == req.params.postId
    })

    if (post.length == 0) {
      return res
        .status(404)
        .send('Not found');
    }

    res.json(post[0])
  })

}