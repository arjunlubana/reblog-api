const User = require("../../db/models/user.model");
const { ClientError, ServerError } = require("../../errors");

async function destroyUser(id) {
  try {
    const res = await User.destroy({
      where: {
        id,
      },
    });
    if (res) {
      return { message: `User ${id} deleted`, status: 200 };
    } else {
      throw new ClientError(
        "Not Found",
        404,
        `Failed to delete user ${id}. User does not exist`
      );
    }
  } catch (error) {
    throw error;
  }
}

module.exports = destroyUser;