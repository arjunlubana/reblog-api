const express = require("express");
const blogsRoute = require("./blogs.route");
const userRoute = require("./user.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/blogs",
    route: blogsRoute,
  },
  {
    path: "/user",
    route: userRoute,
  },
];

//   const devRoutes = [
//     // routes available only in development mode
//     {
//       path: '/docs',
//       route: docsRoute,
//     },
//   ];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
// if (config.env === "development") {
//   devRoutes.forEach((route) => {
//     router.use(route.path, route.route);
//   });
// }

module.exports = router;
