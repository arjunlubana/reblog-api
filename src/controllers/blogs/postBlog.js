const { createBlog } = require("../../services/blogs.service");
const { fetchUser } = require("../../services/auth0.service");
const ServerError = require("../../errors/serverError");

async function postBlog(req, res, next) {
  try {
    req.body.author = req.auth.payload.sub;
    const blog = await createBlog(req.body);
    res.send(blog);
  } catch (err) {
    let error = new ServerError(
      "Server Error",
      503,
      "Internal Server Error",
      err
    );
    next(error);
  }
}

module.exports = postBlog;
