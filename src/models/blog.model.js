const { DataTypes } = require("sequelize");
const db = require("../services/db.service");

const Blog = db.define("Blog", {
  cover: { type: DataTypes.STRING, defaultValue: null },
  title: { type: DataTypes.JSON },
  body: { type: DataTypes.JSON },
  likes: { type: DataTypes.INTEGER },
  comments: { type: DataTypes.JSON },
  publish: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = Blog;
