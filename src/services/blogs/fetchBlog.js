const { Blog } = require('../../db/models')
const { ClientError } = require('../../errors')

async function fetchBlog(id) {
  const blog = await Blog.findByPk(id)
  if (!blog) {
    throw new ClientError(
      'Resource Not Found',
      404,
      `Blog ${id} does not exist.`
    )
  }
  return blog
}

module.exports = fetchBlog
