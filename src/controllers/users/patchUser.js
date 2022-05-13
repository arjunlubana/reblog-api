const { fetchUser, updateUser } = require("../../services/users.service");

async function patchBlog(req, res, next) {
  const { id } = req.params;
  const body = req.body;
  try {
    const user = await fetchUser(id);
    const updatedUser = await updateUser(user, body)
    if(updatedUser){
     res.json(updatedUser)
    }
  } catch (error) {
    next(error);
  }
}

module.exports = patchBlog;
