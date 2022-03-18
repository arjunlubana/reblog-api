const Blog = require("../models/blog.model");

async function getBlogs(req, res) {
  try {
    const data = await Blog.findAll({
      where: {
        publish: true,
      },
    });
    res.send(data);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}

module.exports = getBlogs;
