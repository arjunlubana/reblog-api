const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const sequelize = require("../middleware/dbConnect")();

// Get all blogs
router.get("/", (req, res) => {
  (async () => {
    try {
      const data = await Blog.findAll();
      res.send(data);
    } catch (error) {
      res.sendStatus(500);
      console.log(error);
    } finally {
      sequelize.close();
    }
  })();
});

// Get a particular blog
router.get("/:id", (req, res) => {
  const params = req.params;
  (async () => {
    try {
      const data = await Blog.findByPk(params.id);
      if (data === null) {
        res.sendStatus(404);
      } else {
        res.send(data);
      }
    } catch (error) {
      res.sendStatus(500);
      console.log(error);
    } finally {
      sequelize.close();
    }
  })();
});

// Add a new blog
router.post("/new", (req, res) => {
  (async () => {
    try {
      const blog = await Blog.create({
        cover_image: req.body.coverImage,
        title: req.body.blogTitle,
        body: req.body.blogBody,
        likes: req.body.likes,
        comments: req.body.comments,
      });
      res.send(blog);
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
  (async () => {
    try {
      const update_status = await Blog.update(
        {
          cover_image: req.body.coverImage,
          title: req.body.blogTitle,
          body: req.body.blogBody,
          likes: req.body.likes,
          comments: req.body.comments,
        },
        {
          where: {
            id: params.id,
          },
        }
      );
      if (update_status[0] === 0) {
        res.sendStatus(404);
      } else {
        const newBlog = await Blog.findByPk(params.id);
        res.send(newBlog);
      }
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
