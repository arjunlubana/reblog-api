const { DataTypes } = require("sequelize");
const connectToDatabase = require("../services/db-connect")
const sequelize = connectToDatabase()

const User = sequelize.define('User', {
  username: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
})

module.exports = User;
