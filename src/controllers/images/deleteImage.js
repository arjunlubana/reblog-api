const { destroyImage } = require('../../services/images')

async function deleteImage(req, res, next) {
  const { id } = req.params
  try {
    console.log(id)
    destroyImage(id)
    res.json("Ok")
  } catch (error) {
    next(error)
  }
}

module.exports = deleteImage