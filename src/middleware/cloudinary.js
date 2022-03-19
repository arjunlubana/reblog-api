const cloudinary = require("cloudinary");
const {
  cloud_name,
  api_key,
  api_secret,
} = require("../config/cloudinary.config");

cloudinary.config({ cloud_name, api_key, api_secret });

async function cloudUpload(req, res, next) {
  if (req.file) {
    const { path, fieldname, filename } = req.file;
    try {
      const response = await cloudinary.v2.uploader.upload(path, {
        folder: "Reblog/",
        public_id: filename,
      });
      Object.defineProperty(req.body, fieldname, {
        value: response.secure_url,
      });
    } catch (error) {
      console.log("Error: File upload failed\n", error);
    }
  }
  next();
}

function cloudDelete(cover) {
  const public_id = cover.match(/Reblog.\w*/);
  cloudinary.v2.uploader.destroy(public_id);
}
module.exports = { cloudUpload, cloudDelete };