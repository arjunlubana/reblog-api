const express = require("express");
const cors = require("cors");
const routes = require("./routes/v1");
const errorLogger = require("./middleware/errorLogger");
const errorResponder = require("./middleware/errorResponder");
const failSafeHandler = require("./middleware/failSafeHandler");
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", routes);

app.use(errorLogger);
app.use(errorResponder);
app.use(failSafeHandler);

module.exports = app;
