const { Model, DataTypes } = require("sequelize");
const sequelize = require("../middleware/dbConnect")();

const Blog = sequelize.define("Blog", {
  cover_image: { type: DataTypes.BLOB },
  title: { type: DataTypes.JSON },
  body: { type: DataTypes.JSON },
  likes: { type: DataTypes.INTEGER },
  comments: { type: DataTypes.JSON },
});

// Force Table Re-Creation
(async () => {
  // await User.sync({ force: true });
  await Blog.sync({ force: true });
})();

module.exports = Blog;
