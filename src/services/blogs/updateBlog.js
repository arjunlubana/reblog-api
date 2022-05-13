async function updateBlog(blog, update) {
  try {
    if (blog) {
      for (const key in update) {
        blog[key] = update[key]
      }
      await blog.save()
      return blog
    }
    return
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = updateBlog
