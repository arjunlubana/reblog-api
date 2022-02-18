const express = require("express");
const session = require("express-session");
const cors = require("cors");
const indexRouter = require("./routes/index");
const blogsRouter = require("./routes/blogs");

const app = express();

// middleware
app.use(cors());
app.use(express.static('uploads')) // Serving static files.
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


// Start server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening to http://localhost:5000`);
});
