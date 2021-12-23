const express = require('express')
const router = express.Router()
const dbService = require("../db-service");
const dbInstance = new dbService();

// Auth

// Query User

router.get("/:id", (req, res) => {
  const params = req.params
  const sequelize = dbInstance.init();
  const User = dbInstance.userInit(sequelize);
  (async () => {
    const data = await User.findAll({
      where:{
        id: params.id
      }
    });
    res.send(data);
    sequelize.close();
  })();
});

module.exports = router