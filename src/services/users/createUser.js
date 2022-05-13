const User = require("../../db/models/user.model");
const { ClientError, ServerError } = require("../../errors");

async function createUser(body) {
  try {
    const user = await User.create(body);
    return user;
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      throw new ClientError("Bad Request", 400, `User already exists`, error);
    }
    if (error.name === "SequelizeValidationError") {
      throw new ClientError(
        "Bad Request",
        400,
        `User id cannot be empty`,
        error
      );
    }
    throw error;
  }
}

module.exports = createUser;