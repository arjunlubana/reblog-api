const { createBlog } = require("../../services/blogs.service");

async function postBlog(req, res, next) {
  try {
    // Set the creator of the blog from the token payload
    req.body.author = req.auth.payload.sub;
    const blog = await createBlog(req.body);
    res.send(blog);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}

module.exports = postBlog;
