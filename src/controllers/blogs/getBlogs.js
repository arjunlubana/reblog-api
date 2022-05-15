const { fetchBlogs } = require('../../services/blogs')

async function getBlogs(req, res, next) {
  try {
    const data = await fetchBlogs()
    res.json(data)
  } catch (error) {
    next(error)
  }
}

module.exports = getBlogs
