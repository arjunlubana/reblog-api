const { createUser } = require('../../services/users')

async function postUser(req, res, next) {
  const body = req.body
  try {
    const user = await createUser(body)
    res.json(user)
  } catch (error) {
    next(error)
  }
}

module.exports = postUser
