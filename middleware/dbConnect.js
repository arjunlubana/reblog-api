const { Sequelize } = require("sequelize");
require("dotenv").config();

function connectToDatabase() {
  var sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: "mariadb",
    }
  );
  return sequelize;
}

module.exports = connectToDatabase;
