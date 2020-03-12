const express = require('express')
const Channel = require("./model")
const stream = require('../stream')

const { Router } = express

const router = Router()

router.post("/channel", async (req, res, next) => {
  try {
    const newChannel = await Channel.create(req.body)
    res.status(201).json(newChannel)

    const action = {
      type: 'NEW_CHANNEL',
      payload: newChannel
    }
    // console.log("this is action.payload", action.payload)
    stream.send(action)

  } catch (err) {
    next(err)
  }
})

module.exports = router;





