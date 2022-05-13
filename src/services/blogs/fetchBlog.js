const { Blog, User } = require('../db/models')
const { ServerError } = require('../errors')

async function fetchBlog(id) {
  try {
    return await Blog.findByPk(id, {
      where: {
        publish: true
      },
      include: User
    })
  } catch (error) {
    throw ServerError
  }
}

module.exports = fetchBlog
