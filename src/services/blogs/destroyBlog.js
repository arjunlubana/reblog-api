const { Blog } = require('../../db/models')
const { ClientError, ServerError } = require('../../errors')

async function destroyBlog(id) {
  try {
    await Blog.destroy({
      where: {
        id
      }
    })
  } catch (error) {
    if (error.name === 'SequelizeDatabaseError') {
      throw new ClientError(
        'Not Found',
        404,
        `Blog ${id} deletion failed. Blog does not exist.`,
        error
      )
    }
    throw ServerError
  }
}

module.exports = destroyBlog
