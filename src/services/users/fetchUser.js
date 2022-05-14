const { User } = require('../../db/models')
const { ClientError } = require('../../errors')

async function fetchUser(id) {
  const user = await User.findByPk(id)
  if (!user) {
    throw new ClientError(
      'Resource Not Found',
      404,
      `The user ${id} does not exist.`
    )
  }
  return user
}

module.exports = fetchUser
