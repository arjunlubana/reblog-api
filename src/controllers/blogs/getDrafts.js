const { fetchDrafts } = require('../../services/blogs')

async function getDrafts(req, res, next) {
  try {
    const data = await fetchDrafts()
    res.json(data)
  } catch (error) {
    next(error)
  }
}

module.exports = getDrafts
