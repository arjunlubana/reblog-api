const { Sequelize } = require("sequelize");
require("dotenv").config();

function connectToDatabase() {
  var sequelize = new Sequelize(process.env.DATABASE_URL);

  sequelize.sync({ alter: true });
  return sequelize;
}

module.exports = connectToDatabase;
