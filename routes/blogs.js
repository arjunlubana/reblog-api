const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const sequelize = require("../middleware/dbConnect")();
const multiparty = require("../multiparty/multiparty");

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

function processMultiPartForm(req, blog_data) {
  // create a form to begin parsing
  let form = new multiparty.Form();
  form.uploadDir = "./public/images/blog";

  form.on("file", function (name, file) {
    blog_data.coverImage = file.path.replace("public", "");
  });
  form.on("field", function (name, value) {
    switch (name) {
      case "coverImage":
        blog_data.coverImage = value;
        break;
      case "blogTitle":
        blog_data.blogTitle = JSON.parse(value);
        break;
      case "blogBody":
        blog_data.blogBody = JSON.parse(value);
        break;
      case "likes":
        blog_data.likes = parseInt(value);
        break;
      case "comments":
        blog_data.comments = value;
        break;
    }
  });

  form.on("error", function (err) {
    console.log("Error parsing form: " + err.stack);
  });

  form.parse(req);
  return form;
}
// Add a new blog
router.post("/new", (req, res) => {
  const processedForm = processMultiPartForm(req, (blog_data = {}))
  processedForm.on("close", async function () {
    console.log(blog_data);
    try {
      const blog = await Blog.create({
        cover_image: blog_data.coverImage,
        title: blog_data.blogTitle,
        body: blog_data.blogBody,
        likes: blog_data.likes,
        comments: blog_data.comments,
      });
      res.send("Blog Received");
    } catch (error) {
      res.sendStatus(500);
      console.log(error);
    } finally {
      sequelize.close();
    }
  });
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
