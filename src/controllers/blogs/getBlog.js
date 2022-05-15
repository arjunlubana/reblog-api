const { fetchBlog } = require('../../services/blogs')

async function getBlog(req, res, next) {
  const { id } = req.params
  try {
    const blog = await fetchBlog(id)
    res.json(blog)
  } catch (error) {
    next(error)
  }
}

module.exports = getBlog
