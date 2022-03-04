const { Model, DataTypes } = require("sequelize");
const sequelize = require("../middleware/dbConnect")();

const Blog = sequelize.define("Blog", {
  cover: { type: DataTypes.JSON },
  title: { type: DataTypes.JSON },
  body: { type: DataTypes.JSON },
  likes: { type: DataTypes.INTEGER },
  comments: { type: DataTypes.JSON },
  publish: {type: DataTypes.BOOLEAN, defaultValue: false }
});

// Force Table Re-Creation
(async () => {
  // await User.sync({ force: true });
  await Blog.sync({ force: true });
})();

module.exports = Blog;
