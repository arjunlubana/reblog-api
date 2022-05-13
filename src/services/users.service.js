const User = require("../db/models/user.model");
const ServerError = require("../errors/serverError");
const ClientError = require("../errors/clientError");

async function fetchUser(id) {
  try {
    const user = await User.findByPk(id);
    if (Boolean(user)) {
      return user;
    } else {
      throw new ClientError(
        "Resource Not Found",
        404,
        `The user ${id} does not exist.`
      );
    }
  } catch (error) {
    throw error;
  }
}

async function fetchUsers() {
  try {
    return await User.findAll();
  } catch (error) {
    throw new Error(error.message);
  }
}

async function createUser(body) {
  try {
    const user = await User.create(body);
    return user;
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      throw new ClientError("Bad Request", 400, `User already exists`, err);
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
async function updateUser(user, body) {
  try {
    if (user) {
      for (const field in body) {
        user[field] = body[field];
      }
      await user.save();
      return user;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

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

module.exports = {
  fetchUser,
  fetchUsers,
  createUser,
  updateUser,
  destroyUser,
};
