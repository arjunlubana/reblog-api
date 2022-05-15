const { fetchDrafts } = require('../../services/blogs')

async function getDrafts(req, res, next) {
  try {
    const drafts = await fetchDrafts()
    res.json({ length: drafts.length, data: drafts })
  } catch (error) {
    next(error)
  }
}

module.exports = getDrafts
