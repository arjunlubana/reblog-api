const getBlog = require("./get-blog.controller");
const getBlogs = require("./get-blogs.controller");
const getDrafts = require("./get-drafts.controller");
const postBlog = require("./post-blog.controller");
const deleteBlog = require("./delete-blog.controller");
const uploadFile = require("./upload-file.controller");
const updateBlog = require("./update-blog.controller");

module.exports = {
  getBlog,
  getBlogs,
  getDrafts,
  postBlog,
  deleteBlog,
  uploadFile,
  updateBlog,
};
