const cloudinary = require('cloudinary')
const { cloudName, apiKey, apiSecret } = require('../config/cloudinary.config')

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret
})
/**
 * Uploads media to cloudinary.
 * Sets the blog cover to the media remote URL or null
 * @param  {Object} body - Form data sent by the Client
 * @param  {Object} file - File sent by the client
 * @return {Object}      - Appended body with the cover property set to the file URL
 */
async function cloudUpload(body, file) {
  if (file) {
    const { path, filename } = file
    try {
      const response = await cloudinary.v2.uploader.upload(path, {
        folder: 'Reblog/',
        public_id: filename
      })
      body.cover = response.secure_url
      console.log('File uploaded to cloud', response.secure_url)
    } catch (error) {
      // Prevents removing the cover image when upload fails
      delete body.cover
      throw new Error('Failed to upload file')
    }
  }
  return body
}

function cloudDelete(cover) {
  if (cover) {
    try {
      const publicId = cover.match(/Reblog.\w*/)
      cloudinary.v2.uploader.destroy(publicId)
      console.log(`File ${publicId} deleted successfully`)
    } catch (error) {
      console.log('Error deleting resource', error)
    }
  }
}
module.exports = { cloudUpload, cloudDelete }
