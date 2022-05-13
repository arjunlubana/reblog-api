const User = require("../../db/models/user.model");
const { ClientError, ServerError } = require("../../errors");

async function fetchUser(id) {
  try {
    const user = await User.findByPk(id);
    if (!Boolean(user)) {
      throw `The user ${id} does not exist.`;
    }
    return user;
  } catch (error) {
    throw new ClientError("Resource Not Found", 404, error);
  }
}

module.exports = fetchUser;