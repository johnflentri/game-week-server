const Sequelize = require("sequelize");
const db = require("../db");
const Message = require('../user/model')

const Message = db.define(
  "message",
  {
    message: {
      type: Sequelize.STRING,

    }
  },
  {
    timestamps: false,
  },

);

Message.belongsTo(User)


module.exports = Message;