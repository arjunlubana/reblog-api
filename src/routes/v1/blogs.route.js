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

const upload = require("../../middleware/multer.middleware");

// Get all blogs
router.get("/all", getBlogs);

router.get("/drafts", getDrafts);

// Get a blog with id
router.get("/:id", getBlog);

// Add a new blog
router.post("/new", postBlog);

// Update A blog
router.patch("/:id", upload.single("cover"), patchBlog);

// Delete a blog from the DB
router.delete("/:id", deleteBlog);

module.exports = router;
