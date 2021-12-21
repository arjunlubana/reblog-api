const express = require("express")
const indexRouter = require("./routes/index")
const blogsRouter = require("./routes/blogs")
const usersRouter = require("./routes/users")


const app = express();
app.use("/", indexRouter)
app.use("/api", blogsRouter, usersRouter)



app.listen(process.env.PORT || 3000, () =>{
  console.log(`Listening to http://localhost:3000`)
});