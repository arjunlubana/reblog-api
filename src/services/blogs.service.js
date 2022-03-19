const Blog = require("../db/models/blog.model");

async function fetchBlog(id) {
  try {
    return await Blog.findByPk(id, {
      where: {
        publish: true,
      },
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
async function fetchBlogs() {
  try {
    return await Blog.findAll({
      where: {
        publish: true,
      },
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
async function fetchDrafts() {
  try {
    return await Blog.findAll({
      where: {
        publish: false,
      },
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
async function createBlog() {
  try {
    return await Blog.create(req.body);
  } catch (error) {
    throw new Error(error.message);
  }
}
async function updateBlog(id) {
  try {
    let blog = await Blog.findByPk(id);
    if (blog) {
      for (const key in req.body) {
        blog[key] = req.body[key];
      }
      await blog.save();
      return blog;
    }
    return;
  } catch (error) {
    throw new Error(error.message);
  }
}
async function destroyBlog(id) {
  try {
    const blog = await Blog.findByPk(id);
    await blog.destroy();
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  fetchBlog,
  fetchBlogs,
  fetchDrafts,
  createBlog,
  updateBlog,
  destroyBlog,
};