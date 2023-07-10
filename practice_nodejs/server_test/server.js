const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "views", "index.ejs"));
});

app.listen(3000, () => {
  console.log("start listening");
});
