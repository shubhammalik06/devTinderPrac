const adminAuth = (req, res, next) => {
  console.log("Admin auth");
  const authToken = "abcd";
  const isAuth = authToken === "abc";
  if (!isAuth) {
    res.status(401).send("You don't have permission.");
  } else {
    next();
  }
};

module.exports = {
    adminAuth
}