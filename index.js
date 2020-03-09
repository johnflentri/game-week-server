const cors = require('cors')
const express = require('express')
const db = require('./db')
const app = express()
const userRouter = require('./user/router')
const scoreRouter = require('./scores/router')

const port = process.env.PORT || 4000

const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = express.json()
app.use(parserMiddleware)

app.use(userRouter)
app.use(scoreRouter)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log('Database schema connected to port:', port))

