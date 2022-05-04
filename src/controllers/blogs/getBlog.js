const { fetchBlog } = require("../../services/blogs.service");

async function getBlog(req, res, next) {
  const { id } = req.params;
  try {
    const data = await fetchBlog(id);
    !data ? res.sendStatus(404) : res.send(data);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}

module.exports = getBlog;
