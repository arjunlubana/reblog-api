const { Sequelize } = require("sequelize");
let db_options = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  db_options = {};
}

function connectToDatabase() {
  let sequelize = new Sequelize(process.env.DATABASE_URL, db_options);

  sequelize.sync({ alter: true });
  return sequelize;
}

module.exports = connectToDatabase;
