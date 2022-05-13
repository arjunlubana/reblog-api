const User = require('../../db/models/user.model')
const { ClientError } = require('../../errors')

async function destroyUser(id) {
  const res = await User.destroy({
    where: {
      id
    }
  })
  if (res) {
    return { message: `User ${id} deleted`, status: 200 }
  } else {
    throw new ClientError(
      'Not Found',
      404,
      `Failed to delete user ${id}. User does not exist`
    )
  }
}

module.exports = destroyUser
