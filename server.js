const express = require("express");
const session = require("express-session");
const cors = require("cors");
const indexRouter = require("./routes/index");
const blogsRouter = require("./routes/blogs");
const filesRouter = require("./routes/files");
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const app = express();

// middleware
app.use(cors());
app.use(
  express.raw({
    type: "text/plain",
    verify: function (req, res, buf, encoding) {
      try{
        buf.toString()
      }catch(error){
        throw(error)
      }
    },
  })
);
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
app.use("/api/files", filesRouter);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Listening to http://localhost:5000`);
});
