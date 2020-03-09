const express = require('express')
const db = require('../db')
const stream = require('../stream')

const { Router } = express

const router = Router()

router.post("/message", async (req, res, next) => {
  try {
    const newMessage = await Message.create(req.body)
    res.status(201).json(newMessage)

    const action = {
      type: 'NEW_MESSAGE',
      payload: newMessage
    }

    stream.send(action)

  } catch (err) {
    next(err)
  }
})

module.exports = router