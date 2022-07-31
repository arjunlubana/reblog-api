const { Sequelize, DataTypes } = require('sequelize')
const db = require('../connector.db')
const User = require('./user.model')

const Blog = db.define('Blog', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  cover: { type: DataTypes.STRING, defaultValue: null },
  title: { type: DataTypes.JSON },
  body: { type: DataTypes.JSON },
  likes: { type: DataTypes.INTEGER },
  comments: { type: DataTypes.JSON },
  publish: { type: DataTypes.BOOLEAN, defaultValue: false },
  authorId: { type: DataTypes.STRING, allowNull: false }
})

module.exports = Blog
