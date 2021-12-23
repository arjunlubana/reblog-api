const express = require("express");
const router = express.Router();
const dbService = require("../db-service");
const dbInstance = new dbService();

// Get all blogs
router.get("/", (req, res) => {
  const sequelize = dbInstance.init();
  const Blog = dbInstance.blogInit(sequelize);
  (async () => {
    const data = await Blog.findAll();
    res.send(data);
    sequelize.close();
  })();
});

// Get a particular blog
router.get("/:id", (req, res) => {
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
router.post("/new", (req, res) => {
  const sequelize = dbInstance.init();
  const Blog = dbInstance.blogInit(sequelize);
  (async () => {
    try {
      await Blog.create({
        title: req.body.title,
        data: req.body.data,
        likes: req.body.likes,
        comments: req.body.comments,
      });
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
      console.log(error);
    } finally {
      sequelize.close();
    }
  })();
});

// Update A blog
router.put("/:id/update", (req, res) => {
  const params = req.params;
  const sequelize = dbInstance.init();
  const Blog = dbInstance.blogInit(sequelize);
  (async () => {
    try {
      await Blog.update({
        title: req.body.title,
        data: req.body.data,
        likes: req.body.likes,
        comments: req.body.comments,
      }, {
        where: {
          id: params.id
        }
      });
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
      console.log(error);
    } finally {
      sequelize.close();
    }
  })();
});

// Delete a blog from the DB
router.delete("/:id/delete", (req, res) => {
  const params = req.params;
  const sequelize = dbInstance.init();
  const Blog = dbInstance.blogInit(sequelize);
  (async () => {
    try {
      await Blog.destroy({
        where: {
          id: params.id,
        },
      });
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
      console.log(error);
    } finally {
      sequelize.close();
    }
  })();
});

module.exports = router;
