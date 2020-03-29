const db = require('../queries')

module.exports = app => {
  app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })
  app.get('/users', db.getUsers)
  app.get('/users/:id', db.getUserById)
  app.post('/users', db.createUser)
  app.put('/users/:id', db.updateUser)
  app.delete('/users/:id', db.deleteUser)

  // 404 errors
  app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })
  // 500 errors
  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
}
