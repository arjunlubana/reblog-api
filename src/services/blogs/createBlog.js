const { Blog } = require('../../db/models')
const { ServerError, ClientError } = require('../../errors')

async function createBlog(body) {
  try {
    return await Blog.create(body)
  } catch (error) {
    if (error.name === 'SequelizeForeignKeyConstraintError') {
      throw new ClientError(
        'Bad Request',
        400,
        'Sign up to create a blog post',
        error
      )
    }
    throw new ServerError(error)
  }
}

module.exports = createBlog
