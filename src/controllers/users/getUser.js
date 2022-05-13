const { fetchUser } = require("../../services/users.service");

async function getUser(req, res, next) {
  const { id } = req.params;
  try {
    const user = await fetchUser(id);
    res.json(user)
  } catch (error) {
    next(error);
  }
}

module.exports = getUser;
