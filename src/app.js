const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "CI/CD with GitHub Actions is working!" });
});

module.exports = app;
