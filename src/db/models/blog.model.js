const { DataTypes } = require("sequelize");
const db = require("../connector.db");

const Blog = db.define("Blog", {
  author: {type: DataTypes.STRING},
  cover: { type: DataTypes.STRING, defaultValue: null },
  title: { type: DataTypes.JSON },
  body: { type: DataTypes.JSON },
  likes: { type: DataTypes.INTEGER },
  comments: { type: DataTypes.JSON },
  publish: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = Blog;
