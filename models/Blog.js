const { DataTypes } = require("sequelize");
const connectToDatabase = require("../services/db-connect")
const sequelize = connectToDatabase()

const Blog = sequelize.define('Blog', {
  cover: { type: DataTypes.STRING, defaultValue: null },
  title: { type: DataTypes.JSON },
  body: { type: DataTypes.JSON },
  likes: { type: DataTypes.INTEGER },
  comments: { type: DataTypes.JSON },
  publish: { type: DataTypes.BOOLEAN, defaultValue: false }
})

module.exports = Blog;
