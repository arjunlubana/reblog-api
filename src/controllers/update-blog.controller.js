const Blog = require("../models/blog.model");

async function updateBlog(req, res) {
  try {
    let blog = await Blog.findByPk(req.params.id);
    // Response if blog is not found
    if (!blog) {
      res.sendStatus(404);
    } else {
      // Delete existent cover on cloudinary
      if (blog.cover && req.body.cover) {
        const public_id = blog.cover.match(/Reblog.\w*/);
        cloudinary.v2.uploader.destroy(public_id);
      }
      for (const key in req.body) {
        blog[key] = req.body[key];
      }
      await blog.save();
      res.send(blog);
    }
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}

module.exports = updateBlog;
