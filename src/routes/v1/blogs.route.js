const express = require("express");
const router = express.Router();
const {
  getBlog,
  getBlogs,
  getDrafts,
  postBlog,
  deleteBlog,
  patchBlog,
} = require("../../controllers/blogs.controller");

const multerUpload = require("../../middleware/multer");
const { cloudUpload } = require("../../middleware/cloudinary");

// Get all blogs
router.get("/all", getBlogs);

router.get("/drafts", getDrafts);

// Get a blog with id
router.get("/:id", getBlog);

// Add a new blog
router.post("/new", postBlog);

// Update A blog
let fileUpload = [multerUpload.single("cover"), cloudUpload];
router.put("/:id", patchBlog);

// Delete a blog from the DB
router.delete("/:id", deleteBlog);

module.exports = router;
