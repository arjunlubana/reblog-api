const { createBlog } = require("../../services/blogs.service");
const ServerError = require("../../errors/serverError");

async function postBlog(req, res, next) {
  try {
    // req.body.author = req.auth.payload.sub;
    const blog = await createBlog(req.body);
    res.send(blog);
  } catch (error) {
    next(error);
  }
}

module.exports = postBlog;
