const { fetchBlog } = require("../../services/blogs.service");
const ClientError = require("../../errors/clientError");

async function getBlog(req, res, next) {
  const { id } = req.params;
  try {
    const data = await fetchBlog(id);
    res.send(data);
  } catch (err) {
    let error = new ClientError(
      "Resource Not Found",
      404,
      `The blog with the id ${id} does not exist.`,
      err
    );
    next(error);
  }
}

module.exports = getBlog;
