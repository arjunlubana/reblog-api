const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const multer = require("multer");

const uploadPath = path.join(__dirname, "../uploads");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = file.mimetype.split("/")[1];
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + fileExtension);
  },
});
const upload = multer({ storage: storage });

router.post("/", upload.single("cover"), (req, res) => {
  res.send(req.file.filename);
});

router.get("/:filename", (req, res) => {
  var options = {
    root: uploadPath,
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };
  const filename = req.params.filename;
  res.sendFile(filename, options, (err) => {
    err ? console.log(err) : console.log("Sent:");
  });
});

router.delete("/", (req, res) => {
  let filePath = path.join(uploadPath, req.body.toString());
  fs.rm(filePath, (error) => {
    if (error) {
      throw error;
    }
    console.log("File Deleted Successfully");
  });
  res.sendStatus(200);
});

module.exports = router;
