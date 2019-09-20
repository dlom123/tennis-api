const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./api')


app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

app.use('/api/v1', routes)

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Stats app is listening on port ${port}!`))
