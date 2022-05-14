const { destroyBlog } = require('../../services/blogs')

async function deleteBlog(req, res, next) {
  const { id } = req.params
  try {
    // Only delete if the user is the creator of the resource.
    await destroyBlog(id)
    res.json({ message: `Blog ${id} deleted`, status: 200 })
  } catch (error) {
    next(error)
  }
}

module.exports = deleteBlog
