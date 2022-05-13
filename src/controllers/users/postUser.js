const { createUser } = require("../../services/users.service");
const ServerError = require("../../errors/serverError");
const ClientError = require("../../errors/clientError");

async function postUser(req, res, next) {
  const body = req.body;
  try {
    const user = await createUser(body);
    res.send(user);
  } catch (err) {
    next(err);
  }
}

module.exports = postUser;
