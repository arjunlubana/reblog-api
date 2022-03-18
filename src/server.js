const app = require("./app");
const { port } = require("./config/app.config");

// Start server
app.listen(port, () => {
  console.log(`Listening on port ${5000}`);
});
