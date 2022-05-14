const { destroyUser } = require('../../services/users')

async function deleteUser(req, res, next) {
  const { id } = req.params
  try {
    await destroyUser(id)
    res.json({ message: `User ${id} deleted`, status: 200 })
  } catch (error) {
    next(error)
  }
}

module.exports = deleteUser
