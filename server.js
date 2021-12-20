const express = require("express")

const app = express();

app.get("/", (req, res) => {
  res.send("Hello My friend")
})

app.listen(process.env.PORT || 3000, () =>{
  console.log(`Listening to http://localhost:3000`)
});