const { createBlog } = require('../../services/blogs')
const auth0Manager = require('../../services/auth0Manager')
async function postBlog(req, res, next) {
  try {
    req.body.authorId = req.auth.sub
    const blog = await createBlog(req.body)
    await auth0Manager.getUser(
      { id: "auth0|6270c3055b7a82006f921ec8" },
      function (err, user) {
        blog.authorId = user.name
        res.json(blog)
      }
    )
  } catch (error) {
    next(error)
  }
}

module.exports = postBlog
