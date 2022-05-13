const { Blog } = require('../db/models')
const { ServerError } = require('../errors')

async function fetchBlogs() {
  try {
    return await Blog.findAll({
      where: {
        publish: true
      }
    })
  } catch (error) {
    throw ServerError
  }
}

module.exports = fetchBlogs
