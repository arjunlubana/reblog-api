const { fetchBlog } = require('../../services/blogs')

async function getBlog(req, res, next) {
  const { id } = req.params
  try {
    const data = await fetchBlog(id)
    res.send(data)
  } catch (error) {
    next(error)
  }
}

module.exports = getBlog
