const Sequelize = require("sequelize");
const db = require("../db");
const User = require('../user/model')

const Score = db.define(
  "score",
  {
    score: {
      type: Sequelize.INTEGER,

    }
  },
  {
    timestamps: false,
  }
);

Score.belongsTo(User)

module.exports = Score;