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

// Public Endpoints
router.get("/all", getBlogs);
router.get("/drafts", getDrafts);
router.get("/:id", getBlog);

// Private Endpoints
router.use(checkJwt);
router.post("/new", postBlog);
router.patch("/:id", upload.single("cover"), patchBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
