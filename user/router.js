const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");

const router = new Router();
router.post("/user", async (req, res, next) => {
  try {
    const newUser = await User.create({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      name: req.body.name,
    });
    // newUser.password = bcrypt.hashSync(newUser.password, saltRounds);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.get("/user", async (req, res, next) => {
  try {
    console.log("testing the get users request");
    const allUsers = await User.findAll();
    if (allUsers) {
      res.json(allUsers);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;