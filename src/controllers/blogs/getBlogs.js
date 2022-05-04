const { fetchBlogs } = require("../../services/blogs.service");

async function getBlogs(req, res, next) {
  try {
    const data = await fetchBlogs();
    res.send(data);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}

module.exports = getBlogs;