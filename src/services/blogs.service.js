const Blog = require("../db/models/blog.model");
const User = require("../db/models/user.model");
const ClientError = require("../errors/clientError");
const ServerError = require("../errors/serverError");

async function fetchBlog(id) {
  try {
    return await Blog.findByPk(id, {
      where: {
        publish: true,
      },
      include: User,
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
async function createBlog(body) {
  try {
    const blog = await Blog.create(body);
  } catch (error) {
    if (error.name === "SequelizeDatabaseError") {
      throw new ClientError("Bad Request", 400, "Sign up to create a blog post", error);
    }
    throw new ServerError;
  }
}
async function updateBlog(blog, update) {
  try {
    if (blog) {
      for (const key in update) {
        blog[key] = update[key];
      }
      await blog.save();
      return blog;
    }
    return;
  } catch (error) {
    throw new Error(error.message);
  }
}
async function destroyBlog(blog) {
  try {
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
