const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(dbConfig.url, dbConfig.options);
try {
  sequelize.authenticate().then(() => {
    sequelize.sync({ alter: true });
    console.log("Database connection has been established successfully.");
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
