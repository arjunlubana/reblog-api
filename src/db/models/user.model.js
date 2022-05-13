const { DataTypes } = require('sequelize')
const db = require('../connector.db')

const User = db.define('User', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  picture: { type: DataTypes.STRING },
  nickname: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING }
})

module.exports = User
