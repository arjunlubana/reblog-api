const { destroyUser } = require("../../services/users.service");

async function deleteUser(req, res, next) {
  const { id } = req.params;
  try {
      const response = await destroyUser(id);
      res.json(response)
  } catch (error) {
    next(error);
  }
}

module.exports = deleteUser;