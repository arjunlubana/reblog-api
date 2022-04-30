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
const checkJwt = require("../../middleware/auth0.middleware");

// Get all blogs
router.get("/all", getBlogs);

router.get("/drafts", getDrafts);

// Get a blog with id
router.get("/:id", getBlog);

// Add a new blog
router.post("/new", checkJwt, postBlog);

// Update A blog
router.patch("/:id", checkJwt, upload.single("cover"), patchBlog);

// Delete a blog from the DB
router.delete("/:id", checkJwt, deleteBlog);

module.exports = router;
