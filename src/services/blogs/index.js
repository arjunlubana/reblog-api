const fetchBlog = require('./fetchBlog')
const fetchBlogs = require('./fetchBlogs')
const fetchDrafts = require('./fetchDrafts')
const createBlog = require('./createBlog')
const updateBlog = require('./updateBlog')
const destroyBlog = require('./destroyBlog')

module.exports = {
  fetchBlog,
  fetchBlogs,
  fetchDrafts,
  createBlog,
  updateBlog,
  destroyBlog
}
