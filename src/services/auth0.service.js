var ManagementClient = require("auth0").ManagementClient;
const { domain, clientId, clientSecret } = require("../config/auth0.config");

var auth0 = new ManagementClient({
  domain,
  clientId,
  clientSecret,
});

async function fetchUser(id) {
  try {
    const user = await auth0.getUser(id);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}
async function fetchUsers() {
  try {
    return;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function createUser(body) {
  try {
    return;
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
      return;
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


module.exports = { fetchUser };
