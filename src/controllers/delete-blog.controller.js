const Blog = require("../models/blog.model");

async function deleteBlog(req, res) {
  try {
    const blog = await Blog.findByPk(req.params.id);
    const public_id = blog.cover.match(/Reblog.\w*/);
    cloudinary.v2.uploader.destroy(public_id);
    await blog.destroy();
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}

module.exports = deleteBlog;
