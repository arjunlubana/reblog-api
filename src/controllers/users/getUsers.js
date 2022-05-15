const { fetchUsers } = require('../../services/users')

async function getUsers(req, res, next) {
  try {
    const users = await fetchUsers()
    res.json({ length: users.length, data: users })
  } catch (error) {
    next(error)
  }
}

module.exports = getUsers
