const { Blog } = require('../../db/models')
const { ClientError, ServerError } = require('../../errors')

async function updateBlog(id, update) {
  try {
    // Update the blog of given Id
    await Blog.update(update, {
      where: {
        id
      }
    })
    return
  } catch (error) {
    if (error.name === 'SequelizeDatabaseError') {
      throw new ClientError(
        'Bad Request',
        400,
        `The blog ${id} update failed. Blog is unavailable`,
        error
      )
    }
    throw ServerError
  }
}

module.exports = updateBlog
