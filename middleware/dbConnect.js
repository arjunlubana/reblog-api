const { Sequelize } = require("sequelize");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

function connectToDatabase() {
  var sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });

  sequelize.sync({ alter: true });
  return sequelize;
}

module.exports = connectToDatabase;
