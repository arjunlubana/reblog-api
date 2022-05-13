const { ServerError } = require('../../errors')

async function updateUser(user, body) {
  try {
    if (user) {
      for (const field in body) {
        user[field] = body[field]
      }
      await user.save()
      return user
    }
  } catch (error) {
    throw ServerError
  }
}

module.exports = updateUser
