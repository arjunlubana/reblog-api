const { Model, DataTypes } = require("sequelize");

class Blog extends Model {
  static model = {
    title: { type: DataTypes.TEXT },
    data: { type: DataTypes.JSON },
    likes: { type: DataTypes.INTEGER },
    comments: { type: DataTypes.JSON },
  };
}

module.exports = Blog;
