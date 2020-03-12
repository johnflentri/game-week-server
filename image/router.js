const { Router } = require('express')
const Image = require('./model')
const auth = require('../auth/middleware')

const router = new Router();

// router.get("/image", async (req, res, next) => {
//   try {
//     console.log("testing the get image request");
//     const allImages = await Image.findAll();
//     if (allImages) {
//       res.json(allImages);
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     next(err);
//   }
// });

router.get("/image", (req, res, next) => {
  Image.findAll()
    .then(image => {
      res.send(image)
    })
    .catch(next)
})

router.post("/image", auth, (req, res, next) => {
  Image.create(req.body)
    .then(image => {
      res.send(image)
    })
    .catch(next)
})

module.exports = router