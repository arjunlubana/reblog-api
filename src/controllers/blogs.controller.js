const {
  fetchBlog,
  fetchBlogs,
  fetchDrafts,
  createBlog,
  updateBlog,
  destroyBlog,
} = require("../services/blogs.service");
const { cloudUpload, cloudDelete } = require("../services/cloudinary.service");

async function getBlog(req, res) {
  const { id } = req.params;
  try {
    const data = await fetchBlog(id);
    !data ? res.sendStatus(404) : res.send(data);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}

async function getBlogs(req, res) {
  try {
    const data = await fetchBlogs();
    res.send(data);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}
async function getDrafts(req, res) {
  try {
    const data = await fetchDrafts();
    res.send(data);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}
async function postBlog(req, res) {
  try {
    const blog = await createBlog(req.body);
    res.send(blog);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}
async function patchBlog(req, res) {
  const { id } = req.params;
  const body = req.body;
  const file = req.file;
  try {
    const update = await cloudUpload(body, file);
    const blog = await fetchBlog(id);
    if (blog.cover) {
      await cloudDelete(blog.cover);
    }
    const updatedBlog = await updateBlog(blog, update);
    res.send(updatedBlog);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}

async function deleteBlog(req, res) {
  const { id } = req.params;
  try {
    const blog = await fetchBlog(id);
    if (blog) {
      await cloudDelete(blog.cover);
      await destroyBlog(blog);
      res.sendStatus(200);
      return;
    }
    res.sendStatus(404);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}

module.exports = {
  getBlog,
  getBlogs,
  getDrafts,
  postBlog,
  patchBlog,
  deleteBlog,
};
