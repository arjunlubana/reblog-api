const { fetchDrafts } = require('../../services/blogs')
const { ServerError } = require('../../errors')

async function getDrafts(req, res, next) {
  try {
    const data = await fetchDrafts()
    res.send(data)
  } catch (err) {
    let error = new ServerError(
      'Service Unavailable',
      503,
      'There seems to be a problem with the server.',
      err
    )
    next(error)
  }
}

module.exports = getDrafts
