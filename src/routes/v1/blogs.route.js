const express = require('express')
const router = express.Router()
const {
  getBlog,
  getBlogs,
  getDrafts,
  postBlog,
  deleteBlog,
  patchBlog
} = require('../../controllers/blogs')

const checkJwt = require('../../middleware/jwt.middleware')

// Public Endpoints
router.get('/', getBlogs)
router.get('/drafts', checkJwt, getDrafts)
router.get('/:id', getBlog)

router.use(checkJwt)
// Private Endpoints
router.post('/new', postBlog)
router.patch('/:id', patchBlog)
router.delete('/:id', deleteBlog)

module.exports = router
