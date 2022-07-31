const express = require('express')
const router = express.Router()
const deleteImage = require('../../controllers/images/deleteImage')
const checkJwt = require('../../middleware/jwt.middleware')

// Private Endpoints
router.use(checkJwt)
router.delete('/:id', deleteImage)

module.exports = router
