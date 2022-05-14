const User = require('../../db/models/user.model')
const { ClientError, ServerError } = require('../../errors')

async function destroyUser(id) {
  try {
    await User.destroy({
      where: {
        id
      }
    })
  } catch (error) {
    if (error.name === 'SequelizeDatabaseError') {
      throw new ClientError(
        'Not Found',
        404,
        `User ${id} deletion failed. User does not exist.`,
        error
      )
    }
    throw ServerError
  }
}
module.exports = destroyUser
