const Sequelize = require("sequelize");
const db = require("../db");


const Channel = db.define(
  "channel",
  {
    channel: {
      type: Sequelize.STRING,

    }
  },
  {
    timestamps: false,
  }
);


module.exports = Channel;