const cloudinary = require('../../config/cloudinary.config')
function destroyImage(publicId) {
  try {
    cloudinary.v2.uploader.destroy(publicId, { resource_type: 'image' })
    console.log(`File ${publicId} deleted successfully`)
  } catch (error) {
    console.log('Error deleting resource', error)
  }
}
module.exports = destroyImage
