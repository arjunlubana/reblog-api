const { DataTypes } = require("sequelize");
const db = require("../connector.db");

const User = db.define("User", {
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  user_name: { type: DataTypes.STRING, allowNull: false },
});

module.exports = User;
