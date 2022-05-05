const { createBlog } = require("../../services/blogs.service");
const { fetchUser } = require("../../services/auth0.service");
const ServerError = require("../../errors/serverError");

async function postBlog(req, res, next) {
  try {
    // auth0|6270c3055b7a82006f921ec8
    // Set the creator of the blog from the token payload
    const user = await fetchUser(req.auth.payload.sub);
    const { user_id, name, nickname, email, picture } = user;
    req.body.author = { user_id, name, nickname, email, picture };
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
