export default (app) => {
  app.get('/', function (req, res) {
    res.json({data: 'Hello World!'})
  })  
}