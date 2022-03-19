const {
  fetchBlog,
  fetchBlogs,
  fetchDrafts,
  createBlog,
  updateBlog,
  destroyBlog,
} = require("../services/blogs.service");

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
    const blog = await createBlog();
    res.send(blog);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}
async function patchBlog(req, res) {
  const { id } = req.params;
  try {
    const data = await updateBlog(id);
    res.send(data);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}

async function deleteBlog(req, res) {
  const { id } = req.params.id;
  try {
    await destroyBlog(id);
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
  postBlog,
  patchBlog,
  deleteBlog,
};
