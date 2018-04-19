import {createJwtToken} from '../jwt/middleware'

export default (app) => {
  // get CSRF
  app
    .get('/user/login', function (req, res) {
      res.json({csrf_login: 'hdsjhdsquç_è1561564654'})
    })

  // get AUTH and deliver JWT Token
  app.post('/user/login', function (req, res) {
    // @TODO validate credentials

    const token = createJwtToken({foo: 'bar'})
    console.log(token)
    res.setHeader('Authorization', 'Bearer ' + token)
    res.json({token: token})

  })

}