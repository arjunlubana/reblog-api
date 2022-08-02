const { createBlog } = require('../../services/blogs')

async function postBlog(req, res, next) {
  try {
    req.body.authorId = req.auth.sub
    const blog = await createBlog(req.body)
    res.json(blog)
  } catch (error) {
    next(error)
  }
}

module.exports = postBlog
