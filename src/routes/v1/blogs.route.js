const express = require("express");
const router = express.Router();
const {
  getBlog,
  getBlogs,
  getDrafts,
  postBlog,
  deleteBlog,
  uploadFile,
  updateBlog,
} = require("../../controllers");
const upload = require("../../middleware/upload");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

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
  postBlog(req, res);
});

// Handle blog cover file upload
router.put("/:id", upload.single("cover"), async (req, res, next) => {
  uploadFile(req, res);
  next();
});

// Update A blog
router.put("/:id", async (req, res) => {
  updateBlog(req, res);
});

// Delete a blog from the DB
router.delete("/:id", async (req, res) => {
  deleteBlog(req, res);
});

module.exports = router;
