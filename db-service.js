const { Sequelize } = require("sequelize");
const User = require("./models/User");
const Blog = require("./models/Blog");
require("dotenv").config();

class dbService {

  // Initialize User and Blog models
  constructor(){
    this.user = User;
    this.blog = Blog;
  }

  // Instantiate new sequelize instance
  init(){
    return new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USERNAME,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        dialect: "mariadb",
      }
    )
  }

  // Defining User model
  userInit(sequelize){
    return this.user.init(this.user.model, { sequelize, modelName: "User" })
  }
  // Defining Blog model
  blogInit(sequelize){
    return this.blog.init(this.blog.model, { sequelize, modelName: "Blog" })
  }

}

module.exports = dbService;
