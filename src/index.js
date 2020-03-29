import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 2000

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

//routes
require('./routes/routes')(app)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

module.exports.app = app;
