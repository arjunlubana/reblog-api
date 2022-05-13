const { fetchUsers } = require("../../services/users");

async function getUsers(req, res, next) {
  try {
    const data = await fetchUsers();
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = getUsers;
