const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const upload = require("../middleware/upload");
const cloudinary = require("cloudinary");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Get all blogs
router.get("/", async (req, res) => {
  try {
    const data = await Blog.findAll({
      where: {
        publish: true,
      },
    });
    res.send(data);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
});

router.get("/drafts", async (req, res) => {
  try {
    const data = await Blog.findAll({
      where: {
        publish: false,
      },
    });
    res.send(data);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
});

// Get a particular blog
router.get("/:id", async (req, res) => {
  try {
    const data = await Blog.findByPk(req.params.id, {
      where: {
        publish: true,
      },
    });
    !data ? res.sendStatus(404) : res.send(data);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
});

// Add a new blog
router.post("/new", async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.send(blog);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
});

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Handle blog cover file upload
router.put("/:id", upload.single("cover"), async (req, res, next) => {
  if (req.file) {
    await cloudinary.v2.uploader.upload(
      req.file.path,
      { folder: "Reblog/", public_id: req.file.filename },
      function (error, result) {
        req.body = { ...req.body, cover: result.secure_url };
      }
    );
  }
  next();
});

// Update A blog
router.put("/:id", async (req, res) => {
  try {
    let blog = await Blog.findByPk(req.params.id);
    // Response if blog is not found
    if (!blog) {
      res.sendStatus(404);
    } else {
      // Delete existent cover on cloudinary
      if (blog.cover && req.body.cover) {
        const public_id = blog.cover.match(/Reblog.\w*/);
        cloudinary.v2.uploader.destroy(public_id);
      }
      for (const key in req.body) {
        blog[key] = req.body[key];
      }
      await blog.save();
      res.send(blog);
    }
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
});

// Delete a blog from the DB
router.delete("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    const public_id = blog.cover.match(/Reblog.\w*/);
    cloudinary.v2.uploader.destroy(public_id);
    await blog.destroy();
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
});

module.exports = router;
