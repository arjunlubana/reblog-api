const { fetchBlogs } = require("../../services/blogs.service");
const ServerError = require("../../errors/serverError");

async function getBlogs(req, res, next) {
  try {
    const data = await fetchBlogs();
    res.send(data);
  } catch (err) {
    let error = new ServerError(
      "Service Unavailable",
      503,
      "There seems to be a problem with the server.",
      err
    );
    next(error);
  }
}

module.exports = getBlogs;
