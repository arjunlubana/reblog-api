const getBlog = require('./getBlog')
const getBlogs = require('./getBlogs')
const getDrafts = require('./getDrafts')
const postBlog = require('./postBlog')
const patchBlog = require('./patchBlog')
const deleteBlog = require('./deleteBlog')

module.exports = {
  getBlog,
  getBlogs,
  getDrafts,
  postBlog,
  patchBlog,
  deleteBlog
}
