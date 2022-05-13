const { fetchBlog, updateBlog } = require('../../services/blogs.service')
const {
  cloudUpload,
  cloudDelete
} = require('../../services/cloudinary.service')

async function patchBlog(req, res, next) {
  const { id } = req.params
  const body = req.body
  const file = req.file
  try {
    const blog = await fetchBlog(id)
    // Only update if the user is the creator of the resource.
    if (blog && blog.author === req.auth.payload.sub) {
      const update = await cloudUpload(body, file)
      if (update.cover || blog.cover) {
        await cloudDelete(blog.cover)
      }
      const updatedBlog = await updateBlog(blog, update)
      res.send(updatedBlog)
    }
    res.sendStatus(404)
  } catch (error) {
    next(error)
  }
}

module.exports = patchBlog
