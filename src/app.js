const express = require("express");
const connectDB = require("./config/database");

const app = express();
const User = require("./models/user");

//const { adminAuth } = require("./middlewares/auth");
//app.use("/admin", adminAuth);

app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password, age, gender } = req.query;
  const userObj = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    age: age,
    gender: gender,
  };

  const user = new User(userObj);
  await user.save();
  res.send("User added successfully!");
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(3000, () => {
      console.log("App started");
    });
  })
  .catch((err) => {
    console.log("Error connecting database " + err);
  });
