const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static model = {
    name: DataTypes.TEXT,
    favoriteColor: {
      type: DataTypes.TEXT,
      defaultValue: "green",
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER,
  };
}

module.exports = User;
