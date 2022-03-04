const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const sequelize = require("../middleware/dbConnect")();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = file.mimetype.split('/')[1]
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + fileExtension);
  },
});
const upload = multer({ storage: storage });

// Get all blogs
router.get("/", (req, res) => {
  (async () => {
    try {
      const data = await Blog.findAll({
        where: {
          publish: true
        }
      });
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
      const data = await Blog.findByPk(params.id, {
        where: {
          publish: true
        }
      });
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

router.get("/drafts", (req, res) => {
  (async () => {
    try {
      const data = await Blog.findAll({
        where: {
          publish: false
        }
      });
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
router.get("/drafts/:id", (req, res) => {
  const params = req.params;
  (async () => {
    try {
      const data = await Blog.findByPk(params.id,{
        where: {
          publish: false
        }
      });
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
router.post("/new", upload.single("cover"), async (req, res) => {
  try {
    const blog = await Blog.create({ ...req.body, cover: req.file });
    res.send(blog);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  } finally {
    sequelize.close();
  }
});

// Update A blog
router.put("/:id", upload.single("cover"), async (req, res) => {
  try {
    const update_status = await Blog.update(
      { ...req.body, cover: req.file },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (update_status[0] === 0) {
      res.sendStatus(404);
    } else {
      const newBlog = await Blog.findByPk(req.params.id);
      res.send(newBlog);
    }
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  } finally {
    sequelize.close();
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
    } finally {
      sequelize.close();
    }
  })();
});

module.exports = router;
