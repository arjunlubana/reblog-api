const { fetchDrafts } = require("../../services/blogs.service");

async function getDrafts(req, res, next) {
  try {
    const data = await fetchDrafts();
    res.send(data);
  } catch (error) {
    next(error);
  }
}

module.exports = getDrafts;
