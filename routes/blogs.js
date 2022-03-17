const express = require("express");
const router = express.Router();
const multer = require("multer");
const Blog = require("../models/Blog");

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = file.mimetype.split("/")[1];
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage: storage });

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


router.get("/drafts", async (req, res) => {

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
})

// Get a particular blog
router.get("/:id", async (req, res) => {
  try {
    const data = await Blog.findByPk(req.params.id, {
      where: {
        publish: true,
      },
    });
    !data ? res.sendStatus(404) : res.send(data)
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
})

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

// Handle blog cover
router.put("/:id", upload.single("cover"), async (req, res, next) => {
  
  next()
});

// Update A blog
router.put("/:id", async (req, res) => {
  console.log(req.body)
  try {
    await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    const updatedBlog = await Blog.findByPk(req.params.id);
    res.send(updatedBlog);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
});

// Delete a blog from the DB
router.delete("/:id", async (req, res) => {
  const params = req.params;

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
})

module.exports = router;
