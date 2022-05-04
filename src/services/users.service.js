const User = require("../db/models/user.model");

async function fetchUser(id) {
  try {
    return await User.findByPk(id);
  } catch (error) {
    throw new Error(error.message);
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
    return await User.create(body);
  } catch (error) {
    throw new Error(error.message);
  }
}
async function updateUser(user, update) {
  try {
    if (user) {
      for (const key in update) {
        user[key] = update[key];
      }
      await User.save();
      return user;
    }
    return;
  } catch (error) {
    throw new Error(error.message);
  }
}
async function destroyUser(user) {
  try {
    await User.destroy();
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  fetchUser,
  fetchUsers,
  createUser,
  updateUser,
  destroyUser,
};
