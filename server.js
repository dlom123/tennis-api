const express = require('express')
const app = express()
const port = process.env.PORT || 3000
// const cors = require('cors')
// const routes = require('@api')


// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

// app.use('/api/v1', routes)

// const expressServer = app.listen(process.env.PORT || 3000)

app.get('/', (req, res) => res.send('Hey there!'))

app.listen(port, () => console.log(`Stats app is listening on port ${port}!`))
