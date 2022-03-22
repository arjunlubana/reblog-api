const cloudinary = require("cloudinary");
const {
  cloud_name,
  api_key,
  api_secret,
} = require("../config/cloudinary.config");

cloudinary.config({ cloud_name, api_key, api_secret });

async function cloudUpload(body, file) {
  if (file) {
    const { path, fieldname, filename } = file;
    try {
      const response = await cloudinary.v2.uploader.upload(path, {
        folder: "Reblog/",
        public_id: filename,
      });
      Object.defineProperty(body, fieldname, {
        value: response.secure_url,
      });
      console.log("File uploaded to cloud");
    } catch (error) {
      console.log("Error: File upload failed\n", error);
    }
  }
  return body;
}

function cloudDelete(cover) {
  if (cover) {
    try {
      const public_id = cover.match(/Reblog.\w*/);
      cloudinary.v2.uploader.destroy(public_id);
      console.log(`File ${public_id} deleted successfully`);
    } catch (error) {
      console.log("Error deleting resource", error);
    }
  }
}
module.exports = { cloudUpload, cloudDelete };
