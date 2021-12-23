const express = require("express")
const indexRouter = require("./routes/index")
const blogsRouter = require("./routes/blogs")
const usersRouter = require("./routes/users")

const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use("/", indexRouter)
app.use("/api/blogs", blogsRouter)
app.use("/api/users", usersRouter)

app.listen(process.env.PORT || 3000, () =>{
  console.log(`Listening to http://localhost:3000`)
});