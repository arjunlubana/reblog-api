const multer = require("multer");

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9);
    const fileExtension = file.mimetype.split("/")[1];
    cb(null, file.fieldname + "_" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
