const User = require("../../db/models/user.model");
const { ClientError, ServerError } = require("../../errors");

async function fetchUsers() {
  try {
    return await User.findAll();
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = fetchUsers;