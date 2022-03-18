const Blog = require("../models/blog.model");

async function postBlog(req, res) {
  try {
    const blog = await Blog.create(req.body);
    res.send(blog);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}

module.exports = postBlog;
