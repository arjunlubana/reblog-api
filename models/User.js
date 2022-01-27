const { DataTypes } = require("sequelize");

const User = {
  username: DataTypes.TEXT,
  email: DataTypes.TEXT,
  hash: DataTypes.TEXT,
};

module.exports = User;
