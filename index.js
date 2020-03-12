const cors = require('cors')
const express = require('express')
const app = express()
const userRouter = require('./user/router')
const authRouter = require('./auth/router')
const imageRouter = require('./image/router')

const port = process.env.PORT || 4000

const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = express.json()
app.use(parserMiddleware)

app.use(authRouter)
app.use(userRouter)
app.use(imageRouter)

app.listen(port, () => console.log('Database schema connected to port:', port))

