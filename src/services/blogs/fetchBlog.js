const { Blog, User } = require('../../db/models')
const { ClientError, ServerError } = require('../../errors')

async function fetchBlog(id) {
  try {
    const blog = await Blog.findByPk(id, {
      where: {
        publish: true
      },
      include: User
    })
    return blog
  } catch (error) {
    if (error.name === 'SequelizeDatabaseError') {
      throw new ClientError(
        'Not Found',
        404,
        `Blog with id ${id} does not exist.`
      )
    }
    throw ServerError
  }
}

module.exports = fetchBlog
