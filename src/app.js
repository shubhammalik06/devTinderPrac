const express = require("express");
const app = express();

const { adminAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/admin/:userId", (req, res) => {
  res.send("All data");
});

app.get("/user/:userId", (req, res) => {
  res.send("All data");
});

app.listen(3000, () => {
  console.log("App started");
});
