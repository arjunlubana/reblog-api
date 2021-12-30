const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static model = {
    username: DataTypes.TEXT,
    email: DataTypes.TEXT,
    hash: DataTypes.TEXT
  };
}

module.exports = User;
