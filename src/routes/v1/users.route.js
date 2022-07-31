const express = require('express')
const router = express.Router()

const {
  getUser,
  getUsers,
  postUser,
  patchUser,
  deleteUser
} = require('../../controllers/users')

const checkJwt = require('../../middleware/auth0.middleware')

// Public Endpoints
router.get('/all', getUsers)
router.get('/:id', getUser)

// Private Endpoints
router.use(checkJwt);
router.post('/new', postUser)
router.patch('/:id', patchUser)
router.delete('/:id', deleteUser)

module.exports = router
