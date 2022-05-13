const { createUser } = require("../../services/users");

async function postUser(req, res, next) {
  const body = req.body;
  try {
    const user = await createUser(body);
    res.send(user);
  } catch (error) {
    next(error);
  }
}

module.exports = postUser;
