const express = require("express");
const router = express.Router();
const dbService = require("../db-service");

// Query User

router.get("/:id", (req, res) => {
  const params = req.params;
  (async () => {
    const data = await User.findAll({
      where: {
        id: params.id,
      },
    });
    res.send(data);
    sequelize.close();
  })();
});

module.exports = router;
