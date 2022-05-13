const User = require('../../db/models/user.model')
const { ServerError } = require('../../errors')

async function fetchUsers() {
  try {
    return await User.findAll()
  } catch (error) {
    throw ServerError
  }
}

module.exports = fetchUsers
