const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = expressAsyncHandler(async (req, res, next) => {
  const authCookie = req.cookies["authcookie"];
  if (!authCookie) {
    req.authData = { userId: null, userRole: "unauthorized" };
    next();
    return;
  }

  jwt.verify(authCookie, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
    if (err) {
      res.status(401);
      throw new Error("Unauthorized");
    }
    req.authData = data;
    next();
  });
});

module.exports = validateToken;
