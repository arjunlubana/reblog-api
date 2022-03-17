const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// Get all blogs
router.get("/", async (req, res) => {
  try {
    const data = await Blog.findAll({
      where: {
        publish: true,
      },
    });
    res.send(data);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
})


router.get("/drafts", (req, res) => {
  (async () => {
    try {
      const data = await Blog.findAll({
        where: {
          publish: false,
        },
      });
      res.send(data);
    } catch (error) {
      res.sendStatus(500);
      console.log(error);
    }
  })();
});

// Get a particular blog
router.get("/:id", (req, res) => {
  const params = req.params;
  (async () => {
    try {
      const data = await Blog.findByPk(params.id, {
        where: {
          publish: true,
        },
      });
      if (data === null) {
        res.sendStatus(404);
      } else {
        res.send(data);
      }
    } catch (error) {
      res.sendStatus(500);
      console.log(error);
    }
  })();
});

// Add a new blog
router.post("/new", async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.send(blog);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
});

// Update A blog
router.put("/:id", async (req, res) => {
  try {
    const update_status = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (update_status[0] === 0) {
      res.sendStatus(404);
    } else {
      const newBlog = await Blog.findByPk(req.params.id);
      res.send(newBlog);
    }
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
});

// Delete a blog from the DB
router.delete("/:id", (req, res) => {
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
    }
  })();
});

module.exports = router;
