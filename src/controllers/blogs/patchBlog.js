const { fetchBlog, updateBlog } = require('../../services/blogs')

async function patchBlog(req, res, next) {
  const id = req.params.id
  const body = req.body
  try {
    await updateBlog(id, body)
    const update = await fetchBlog(id)
    res.json(update)
  } catch (error) {
    next(error)
  }
}

module.exports = patchBlog
