const { Sequelize } = require("sequelize");

let options = {};
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
} else {
  options = {
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  };
}

const sequelize = new Sequelize(process.env.POSTGRESQL_URL, options);
sequelize.sync({ alter: true });

module.exports = sequelize;
