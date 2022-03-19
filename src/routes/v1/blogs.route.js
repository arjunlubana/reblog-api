const express = require("express");
const router = express.Router();
const {
  getBlog,
  getBlogs,
  getDrafts,
  createBlog,
  deleteBlog,
  updateBlog,
} = require("../../controllers/blogs.controller");

const fileUpload = require("../../middleware/file-upload");
const cloudUpload = require("../../middleware/cloud-upload")

// Get all blogs
router.get("/all", (req, res) => {
  getBlogs(req, res);
});

router.get("/drafts", (req, res) => {
  getDrafts(req, res);
});

// Get a particular blog
router.get("/:id", (req, res) => {
  getBlog(req, res);
});

// Add a new blog
router.post("/new", (req, res) => {
  createBlog(req, res);
});

// Update A blog
router.put("/:id", fileUpload.single("cover"), cloudUpload, (req, res) => {
  updateBlog(req, res);
});

// Delete a blog from the DB
router.delete("/:id", async (req, res) => {
  deleteBlog(req, res);
});

module.exports = router;
