const { Blog } = require('../db/models')
const { ServerError } = require('../errors')

async function fetchDrafts() {
  try {
    return await Blog.findAll({
      where: {
        publish: false
      }
    })
  } catch (error) {
    throw ServerError
  }
}

module.exports = fetchDrafts
