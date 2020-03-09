const { Router } = require("express");
const Score = require("./model");

const router = new Router();

router.post("/score", async (req, res, next) => {
  try {
    const newScore = await Score.create(req.body)
    res.status(201).json(newScore)
  } catch (err) {
    next(err)
  }
})

router.get('/score', async (req, res, next) => {
  try {
    const scores = await Score.findAll()
    if (scores) {
      res.json(scores)
    } else {
      res.status(404).end()
    }
  }
  catch (err) {
    next(err)
  }
}
)

module.exports = router;