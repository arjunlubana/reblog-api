const { Model, DataTypes } = require("sequelize");
const sequelize = require("../middleware/dbConnect")();

const Blog = sequelize.define("Blog", {
  title: { type: DataTypes.JSON },
  body: { type: DataTypes.JSON },
  likes: { type: DataTypes.INTEGER },
  comments: { type: DataTypes.JSON },
});

module.exports = Blog;
