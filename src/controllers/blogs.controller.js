const Blog = require("../models/blog.model");

async function getBlog(req, res) {
  try {
    const data = await Blog.findByPk(req.params.id, {
      where: {
        publish: true,
      },
    });
    !data ? res.sendStatus(404) : res.send(data);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}

async function getBlogs(req, res) {
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
}
async function getDrafts(req, res) {
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
}
async function createBlog(req, res) {
  try {
    const blog = await Blog.create(req.body);
    res.send(blog);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}
async function updateBlog(req, res) {
  try {
    let blog = await Blog.findByPk(req.params.id);
    // Response if blog is not found
    if (!blog) {
      res.sendStatus(404);
    } else {
      // Delete existent cover on cloudinary
      if (blog.cover && req.body.cover) {
        const public_id = blog.cover.match(/Reblog.\w*/);
        cloudinary.v2.uploader.destroy(public_id);
      }
      for (const key in req.body) {
        blog[key] = req.body[key];
      }
      await blog.save();
      res.send(blog);
    }
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}

async function deleteBlog(req, res) {
  try {
    const blog = await Blog.findByPk(req.params.id);
    const public_id = blog.cover.match(/Reblog.\w*/);
    cloudinary.v2.uploader.destroy(public_id);
    await blog.destroy();
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}

module.exports = {
  getBlog,
  getBlogs,
  getDrafts,
  createBlog,
  updateBlog,
  deleteBlog,
};
