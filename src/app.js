const express = require("express");
const cors = require("cors");
const routes = require("./routes/v1")
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", routes);

module.exports = app;