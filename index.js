const cors = require('cors')
const express = require('express')
const app = express()
const userRouter = require('./user/router')
const scoreRouter = require('./scores/router')
const authRouter = require('./auth/router')
const messageRouter = require('./message/router')
const channelRouter = require('./channel/router')
const stream = require('./stream')
const db = require('./db')

const port = process.env.PORT || 4000

const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = express.json()
app.use(parserMiddleware)

app.use(authRouter)
app.use(userRouter)
app.use(scoreRouter)
app.use(channelRouter)

app.get('/stream', (request, response) => {
  stream.init(request, response)

  const action = {
    type: 'ALL_MESSAGES',
    payload: db.messages
  }
  stream.send(action)

  const channelAction = {
    type: 'ALL_CHANNELS',
    payload: db.channels
  }

  stream.send(channelAction)
})

app.use(messageRouter)
app.use(channelRouter)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log('Database schema connected to port:', port))

