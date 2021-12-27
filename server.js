const express = require("express");
const session = require("express-session");
const indexRouter = require("./routes/index");
const blogsRouter = require("./routes/blogs");
const usersRouter = require("./routes/users");
const authRouter = require("./auth");

const app = express();

// middleware

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(
  session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: "shhhh, very secret",
  })
);
app.use("/", indexRouter);
app.use("/api/blogs", blogsRouter);
app.use("/api/users", usersRouter);
app.use("/auth", authRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening to http://localhost:3000`);
});
