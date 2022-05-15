const { fetchUsers } = require('../../services/users')

async function getUsers(req, res, next) {
  try {
    const users = await fetchUsers()
    res.json(users)
  } catch (error) {
    next(error)
  }
}

module.exports = getUsers
