const { fetchDrafts } = require("../../services/blogs.service");

async function getDrafts(req, res, next) {
  try {
    const data = await fetchDrafts();
    res.send(data);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}

module.exports = getDrafts;
