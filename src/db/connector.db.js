const { Sequelize } = require('sequelize')
const { url, options } = require('../config/db.config')

const db = new Sequelize(url, options)
try {
  db.authenticate().then(() => {
    db.sync({ alter: true })
    console.log('Database connection has been established successfully.')
  })
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

module.exports = db
