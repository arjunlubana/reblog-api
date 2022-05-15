const { fetchBlogs } = require('../../services/blogs')

async function getBlogs(req, res, next) {
  try {
    const blogs = await fetchBlogs()
    res.json({ length: blogs.length, data: blogs })
  } catch (error) {
    next(error)
  }
}

module.exports = getBlogs
