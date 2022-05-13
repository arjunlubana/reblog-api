const { Blog } = require('../db/models')
const { ServerError, ClientError } = require('../errors')

async function createBlog(body) {
  try {
    const blog = await Blog.create(body)
  } catch (error) {
    if (error.name === 'SequelizeDatabaseError') {
      throw new ClientError(
        'Bad Request',
        400,
        'Sign up to create a blog post',
        error
      )
    }
    throw new ServerError()
  }
}

module.exports = createBlog
