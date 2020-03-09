const express = require('express')
const db = require('./db')
const app = express()

const port = 4000 || process.env.PORT

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, console.log('Database schema connected to port:', port))

