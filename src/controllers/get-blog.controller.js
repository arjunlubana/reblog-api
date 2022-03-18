const Blog = require("../models/blog.model");

async function getBlog(req, res) {
  try {
    const data = await Blog.findByPk(req.params.id, {
      where: {
        publish: true,
      },
    });
    !data ? res.sendStatus(404) : res.send(data);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}

module.exports = getBlog;
