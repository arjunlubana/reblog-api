const cloudinary = require("cloudinary");

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

async function uploadFile(req, res) {
  if (req.file) {
    await cloudinary.v2.uploader.upload(
      req.file.path,
      { folder: "Reblog/", public_id: req.file.filename },
      function (error, result) {
        req.body = { ...req.body, cover: result.secure_url };
      }
    );
  }
}

module.exports = uploadFile;
