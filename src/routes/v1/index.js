const express = require('express')
const blogsRoute = require('./blogs.route')
const usersRoute = require('./users.route')
const imagesRoute = require('./images.route')

const router = express.Router()

const defaultRoutes = [
  {
    path: '/blogs',
    route: blogsRoute
  },
  {
    path: '/users',
    route: usersRoute
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
