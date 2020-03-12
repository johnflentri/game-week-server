const Sequelize = require('sequelize')

const databaseUrl = process.env.DATABASE_URL || "postgres://postgres:secret@localhost:5432/postgres";

const db = new Sequelize(databaseUrl)

db.sync({ force: false }) //set up reset
  .then(() =>
    console.log("Database stargate pattern confirmed, Einstein-Rosen bridge stabilized!")
  )
  .catch(console.error);

module.exports = db;