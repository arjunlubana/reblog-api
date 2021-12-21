const express = require("express");
const router = express.Router();
const dbService = require("../db-service");
const dbInstance = new dbService();

// Get all blogs
router.get("/blogs", (req, res) => {
  const sequelize = dbInstance.init();
  const Blog = dbInstance.blogInit(sequelize);
  (async () => {
    const data = await Blog.findAll();
    res.send(data);
    sequelize.close();
  })();
});

// Get a particular blog
router.get("/blogs/:id", (req, res) => {
  const params = req.params;
  const sequelize = dbInstance.init();
  const Blog = dbInstance.blogInit(sequelize);
  (async () => {
    const data = await Blog.findAll({
      where: {
        id: params.id,
      },
    });
    res.send(data);
    sequelize.close();
  })();
});

// Add a new blog
router.post("/blogs/new", (req, res) => {
  const params = req.params;
  const sequelize = dbInstance.init();
  const Blog = dbInstance.blogInit(sequelize);
  (async () => {
    const data = await Blog.findAll({
      where: {
        id: params.id,
      },
    });
    res.send(data);
    sequelize.close();
  })();
});

// Update
router.put("/blogs/:id/update", (req, res) => {
  const params = req.params;
  const sequelize = dbInstance.init();
  const Blog = dbInstance.blogInit(sequelize);
  (async () => {
    const data = await Blog.findAll({
      where: {
        id: params.id,
      },
    });
    res.send(data);
    sequelize.close();
  })();
});

// Delete a blog from the DB
router.delete("/blogs/:id/delete", (req, res) => {
  const params = req.params;
  const sequelize = dbInstance.init();
  const Blog = dbInstance.blogInit(sequelize);
  (async () => {
    const data = await Blog.delete({
      where: {
        id: params.id,
      },
    });
    res.send(data);
    sequelize.close();
  })();
});

module.exports = router;
