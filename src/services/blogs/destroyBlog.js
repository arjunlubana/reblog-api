const { ServerError } = require('../../errors')

async function destroyBlog(blog) {
  try {
    await blog.destroy()
  } catch (error) {
    throw ServerError
  }
}

module.exports = destroyBlog
