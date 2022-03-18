const Blog = require("../models/blog.model");

async function getDrafts(req, res) {
  try {
    const data = await Blog.findAll({
      where: {
        publish: false,
      },
    });
    res.send(data);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}

module.exports = getDrafts;
