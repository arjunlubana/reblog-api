const express = require('express')
const blogsRoute = require('./blogs.route')
const imagesRoute = require('./images.route')

const router = express.Router()

const defaultRoutes = [
  {
    path: '/blogs',
    route: blogsRoute
  },
  {
    path: '/images',
    route: imagesRoute
  }
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

module.exports = router
