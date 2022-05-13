const { fetchUsers } = require("../../services/users.service");
const ServerError = require("../../errors/serverError");

async function getUsers(req, res, next) {
  try {
    const data = await fetchUsers();
    res.send(data);
  } catch (err) {
    let error = new ServerError(
      "Service Unavailable",
      503,
      "There seems to be a problem with the server.",
      err
    );
    next(error);
  }
}

module.exports = getUsers;
