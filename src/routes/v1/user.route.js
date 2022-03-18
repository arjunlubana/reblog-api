const express = require("express");
const router = express.Router();

// Query User

router.get("/:id", (req, res) => {
  // (async () => {
  //   const data = await User.findAll({
  //     where: {
  //       id: params.id,
  //     },
  //   });
  res.sendStatus(200);
});

module.exports = router;
