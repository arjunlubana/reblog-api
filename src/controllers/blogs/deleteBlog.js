const { fetchBlog, destroyBlog } = require('../../services/blogs.service')
const { cloudDelete } = require('../../services/cloudinary.service')

async function deleteBlog(req, res, next) {
  const { id } = req.params
  try {
    const blog = await fetchBlog(id)
    // Only delete if the user is the creator of the resource.
    if (blog && blog.author === req.auth.payload.sub) {
      await cloudDelete(blog.cover)
      await destroyBlog(blog)
      res.sendStatus(200)
      return
    }
    res.sendStatus(404)
  } catch (error) {
    next(error)
  }
}

module.exports = deleteBlog
