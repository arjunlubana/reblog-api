const {
  fetchUser,
  fetchUsers,
  createUser,
  updateUser,
  destroyUser,
} = require("../services/users.service");

async function getUser(req, res, next) {
  const { id } = req.params;
  try {
    const user = await fetchUser(id);
    res.send(user)
  } catch (error) {
    console.log(error);
  }
}

async function getUsers(req, res, next) {
  try {
    res.send("Got users");
  } catch (error) {
    console.log(error);
  }
}

async function postUser(req, res, next) {
  const { id } = req.params;
  try {
    res.send("Added user");
  } catch (error) {
    console.log(error);
  }
}
async function patchUser(req, res, next) {
  const { id } = req.params;
  try {
    res.send("Updated user");
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(req, res, next) {
  const { id } = req.params;
  try {
    res.send("Deleted user");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getUser,
  getUsers,
  postUser,
  patchUser,
  deleteUser,
};
